---
title: "Using WikiData data locally"
layout: post
author: Frank Löffler
menulang: en

---

## Preface

I am no expert in this area. This is not a tutorial, but notes to my future self or anyone else interested in the topic. They document my findings and decisions on how to work with WikiData dumps. Your views might differ. In particular, these notes also document dead-ends; things that did not work out or were too inefficient, as for it is from them that I learned most. Almost certainly I missed useful tools or tricks. If I did, I would be delighted to hear about them. Not unlikely, these notes also contain errors. Although not quite as delighted of course, I would like to hear about those as well. For any of these reasons, or maybe just for a simple "Hey, I found this useful", you can reach me using <frank.loeffler@uni-jena.de>.

## My use case

The intended use case here is to locally work on [WikiData](https://www.wikidata.org). This is not always a good idea, because WikiData does provide [nice interfaces](https://www.wikidata.org/wiki/Wikidata:Data_access) to query data directly without you having to download and handle those large dumps. However, since these interfaces are not suitable for all tasks, or from all locations. Whatever the reasons are: imagine you want to work with WikiData data locally.

Even if this use case is quite special, parts of what follows could be useful for other use cases as well. For example, part 1 deals primarily with compression and decompression of these dumps. Since those are essentially gigantic JSON blobs, they do compress really well, like a lot of other text files do, too. If you happen to have really large text data, you might be interested in this section, even if they are not in JSON format. Another example is part 2, which deals with JSON-filtering within those dumps. These files are just large JSON dumps and apart from the specific details of the JSON filter, nothing depends on these being WikiData dumps. In essence: if you deal with large JSON dumps, you might find that section interesting, even if yours do not come from WikiData.

# Part 1: How to deal with the sheer size of WikiData dumps

## Provided file formats

Dumps are provided in different formats, both different content formats (e.g., RDF or JSON), but also different compression formats of the former.

Only JSON format is considered here. It is the recommended format by WikiData, and tools to quickly filter and import it make it easy to use.

At the time of writing this, dump sizes are:

    49G     wikidata-20200330-all.json.bz2
    74G     wikidata-20200330-all.json.gz

Extracted, they both contain (not for download in that form):
    1002G   wikidata-20200330-all.json

I observed download speeds of about 4MB/s (seem to be capped by WikiData, our end could handle more), so this roughly amounts to the following times for download:

    3.5 h   wikidata-20200330-all.json.bz2
    5.3 h   wikidata-20200330-all.json.gz

Those times will likely differ for you, but what you should take from this is: expect to wait for hours, not minutes, and hopefully not day either.

You have to choose one of these for download. WikiData recommends ```bzip2```. This makes sense concerning download times or transfer volume. However, I wanted to see what difference this choice makes when working with those files later, so I downloaded both.

Whatever your choice will be, the first step after obtaining the dump is to decompress it, may it be to save the uncompressed file, or to pass the result directly to some other process. Decompression can be computationally expensive. Also, not all tools are ready to deal with files this large. This is why I had a look at some of the options.

Disclaimer: All numbers below are what I observed on the system I used, the Ara cluster at Friedrich Schiller University Jena. Specifically, unless noted otherwise these were nodes with the following specifications: 2 x Intel Xeon "broadwell" E5-2650v4 12 Core (presented as 48 virtual cores) 2,2 GHz, 128 GB Ram, BeeGFS parallel file system. While I tried to get consistent and meaningful results, none of these have the expectation of being particularly rigorous or scientific. I only wanted to get a rough idea of how different methods compare. Much more elaborate testing would need to be done to get to more robust numbers.

## I/O speed

With files this large, the I/O speed gets noticeable. Reading the entire, uncompressed dump (about 1 TB) from disk exceeds the RAM size on the machine I tried this on, so file cache cannot help a lot. This also means it is a reasonable way to measure raw read I/O from disk.

Read I/O heavily depends on the system. In my case, this is a shared network file system: it has high bandwidth, but it is also a shared resource: benchmarks are almost certain to not be precise. However, I am only interested in rough numbers, and most of all, in numbers on real in-use system, so that is fine for me.

Reading the entire, uncompressed dump from disk suggests a bandwidth of about 585 MB/s (29m06s for 1002 GB for the command below). Since the file size is far larger than the size of the RAM of the machine (128 GB), the file cannot be held in local file cache, so this is using a (mostly) "cold" cache. And just to let this sink in: just reading the uncompressed file from disk takes half an hour.

    { time cat wikidata-20200330-all.json > /dev/null; } 2> cat.time

This number is interesting because it provides one upper limit. It is not *the*  upper limit for direct file I/O, because we can get faster using file caches, but we cannot do that with the entire dump due to its size. We will use this number to compare against decompression speeds, as this is the maximum bandwidth you can feed any filter later *not* using compression.

Some quick notes concerning the command above, because a lot of commands later also look alike: ```time``` measures the time the command after it takes. The ```{ }``` around it make sure that the ```2> cat.time``` afterwards is not treated as part of that command, and what that part does is save the output of the ```time``` command to a file called ```cat.time```. What is actually timed is within the ```{ }```: ```cat wikidata-20200330-all.json > /dev/null```. This reads the file wikidata-20200330-all.json and, simply speaking, throws what it reads away, since for now we are not using any of the data yet.

### Cached I/O speed

To get an idea of the absolute maximum we can get with the file in local cache, we have to use a file that fits into memory. I used wikidata-20200330-all.json.bz2 (49GB):

    { time cat wikidata-20200330-all.json.bz2 > /dev/null; } 2> cat_small.time

This indicates a bandwidth of about 1600 MB/s (31 s for 49 GB) for a cold local cache, and about 2000 MB/s (24.3 s for 49 GB) for a hot cache. Note that the cold-cache bandwidth of the 49 GB-file is much higher than the one for the 1002 GB-file. Non-local caching (on the file servers; this is a network file system) could be the reason. Whatever the reason, a speed that high indicates that whether a file is cached or not is likely not going to influence the decompression performance. This might be different on slower file systems or for very fast decompressors.

## Decompression

I tried several compression formats and tools. This is not a complete list. I have chosen a few standard tools, plus a few that promised more performance. There might be better alternatives out there that I did not try.

Commands used are given in the following subsections and decompression timing results are collected in a table below.

### [gzip](https://www.gnu.org/software/gzip/)

I use the file as provided by WikiData. Other compression flags will likely produce different results.

Using standard gzip:

    { time gunzip -c wikidata-20200330-all.json.gz > /dev/null; } 2> gunzip.time

### [pugz](https://github.com/Piezoid/pugz) (parallel zip implementation)

I again use the file as provided by WikiData. Other compression flags will likely produce different results.

    { time pugz wikidata-20200330-all.json.gz > /dev/null; } 2> pugz.time;

Note: the executable when building ```pugz``` is called ```gunzip```. To differentiate between that and the regular gunzip, and to have both tools being accessible in my PATH, I created a symlink called pugz to the gunzip binary of pugz, and this is used in the command above for clarity.

pugz is a decompression tool that, like gzip, implements zip-decompression, but claims to be more efficient. However, for me it crashes in an assertion after decompressing for a while. I do not know whether the crash happens due to the file size, or due to the fact that the uncompressed output does not only contain ASCII characters (the dumps are utf8), and pugz claims to only support text files with ASCII characters). The unstable nature does not come at a surprise when you read the [documentation](https://github.com/Piezoid/pugz/blob/master/README.md), but given the speed claims it was worth a shot.

### [bzip2](http://www.bzip.org/)

I used the file as provided by WikiData. Other compression flags will likely produce different results.

    { time bzcat wikidata-20200330-all.json.bz2 > /dev/null; } 2> bz2.time

There might be more efficient implementations of bzip2 decompression, but most of them cannot make use of multiple cores or can only do so for specially compressed files. Also, development focus of high-compression-ratio tools shifted away from bzip2 towards xz (see below), due to their inferior characteristics.

### [xz](https://tukaani.org/xz/)

xz specialises in good compression ratios, which comes at the expense of compression time. WikiData does not provide dumps in xz format. However, since we might want to keep the dump stored in a format that is quite efficient concerning space, it does make sense to investigate its decompression speed and compare it against the other methods. However, it also means that in order to go this route, we first have to compress the dump using xz on our own:

Using the ```gzip``` file as input:

    gunzip -c wikidata-20200330-all.json.gz | xz -T 48 > wikidata-20200330-all.json.xz

    (28.5 hours)

The same using ```bzip2```:

    bzcat wikidata-20200330-all.json.bz2 | xz -T 48 > wikidata-20200330-all.json.xz

    (30.5 hours)

This results in the following file size

    42G     wikidata-20200330-all.json.xz

which is smaller than all other formats, but with a bandwidth of about 10 MB/s for compression.

The option ```-T 48``` enables xz to use multiple (48) threads for faster compression (and this command still took more than one day on one node of that particular cluster). It also creates an 'xz' format that can potentially be decompressed in parallel later, although the xz tool itself does not implement parallel decompression.

Using xz to decompress the new file:

    { time xzcat wikidata-20200330-all.json.xz > /dev/null; } 2> xz.time

### [pixz](https://github.com/vasi/pixz)

pixz implements parallel compression/decompression of xz archives. To first compress using pixz (expect more than a day, this took 28 hours for me):

    gunzip -c wikidata-20200330-all.json.gz | pixz -o wikidata-20200330-all.json.pixz

resulting, like the compression time, in a file size similar to xz:

    42G     wikidata-20200330-all.json.pixz

However, pixz can also decompress xz archives generated using the regular xz utilities.

To decompress:

     { time < wikidata-20200330-all.json.xz pixz -t -d > /dev/null; } 2> pixz.time;

From the decompression results (see table below) you see that

- pixz can decompress xz files about 50% faster than xz itself, when using multiple cores.
- Using more than 2 cores to decompress does not give an advantage.
- pixz seems to be able to decompress files it has compressed itself a little faster than those compressed with (parallel) xz.

### [lz4](https://lz4.github.io/lz4/)

lz4 is on the other end of the spectrum from xz: it specialises in speed and trades compression ratio for it. Like for xz, you have to create the compressed file yourself, as WikiData does not provide lz4-compressed dumps. However, unlike for xz, doing this does not take more than a day, but "only" about 3.5 hours for the following command (different compression levels are faster, see below):

    lz4 -9 wikidata-20200330-all.json wikidata-20200330-all.json.lz4

or about 4.5 hours from the gzip sources (the additional time comes from decompressing):

    gunzip -c wikidata-20200330-all.json.gz | lz4 -9 - wikidata-20200330-all.json.lz4

Note that the switch ```-9```, indicating compression level of 9, is usually not recommended. It is said to increase compression time quite a bit, with only a tiny effect on compression ratio. On the other hand, it is also said to not affect decompression speed a lot and I've seen [claims](https://linuxaria.com/article/linux-compressors-comparison-on-centos-6-5-x86-64-lzo-vs-lz4-vs-gzip-vs-bzip2-vs-lzma) of it helping. Usage of ```-1``` instead (the default) results in a 115 GB file. This is after only about 40 minutes of compressing, which includes reading the 1 TB file from disk. Results for different values (using the raw file, not the gzipped dump) are collected in the following table:

| level | compression time in min | size in GB | bandwidth in MB/s |
|------:|------------------------:|-----------:|------------------:|
|     1 |                      41 |        116 |               417 |
|     2 |                      41 |        116 |               417 |
|     3 |                     100 |         86 |               171 |
|     6 |                     144 |         84 |               119 |
|     9 |                    ~210 |         84 |                81 |

From this I take that going beyond level 3 does not add a lot more value, but using level 3 instead of 1 does create a noticeably smaller file with an acceptable increase in compression time. Decompression times are in the overview section below. There, higher levels show performance a little better than 3, making them a viable choice too if compression time is not crucial for you.

Decompressing:

    { time lz4cat wikidata-20200330-all.json.lz4 > /dev/null; } 2> lz4.time

Also note that the lz4 command line utils do not support parallel compression or decompression. The underlying library does however, so you can find claims of almost linear scaling of lz4. This lack of parallelism turns out not to be a problem for me, because as you can see below, lz4 can deliver uncompressed data to another process faster than it likely could be read from most processes, and faster than it could be read uncompressed from disk, due to the high compression ratio the WikiData dumps have even using "only" lz4.

### [zstd](https://github.com/facebook/zstd)

zstd, or long Zstandard, is the "youngest" of the compression algorithms I tried. It has a very wide range of compression configurations, from real-time close to lz4, to levels close to xz. Its implementation claims to handle both parallelized compression and decompression. Thus, I use the ```-T48``` switch to force usage of 48 worker threads (note, there must not be a space in ```-T48```). I did not perform a proper scaling benchmark, but I noticed that at the faster compression ratios, zstd was not able to utilise all of these cores, for both compression and decompression. Also, I could not get zstd to use multiple cores for decompression at all. Using all cores does work, however, for compression at higher compression ratios.

zstd features "fast compression levels": the higher, the faster, sometimes mentioned as negative levels (although then the lower the faster); do not confuse with the ```-5``` command line switch which would indicate a positive level of 5:

    zstd -T48 -q wikidata-20200330-all.json --fast=5 -o wikidata-20200330-all.json.zst

The "regular", positive levels follow the standard command line options other tools also use:

    zstd -T48 -q wikidata-20200330-all.json -9       -o wikidata-20200330-all.json.zst

Note that zstd will use the size of the to-be-compressed file for optimising the compression. If you plan to pipe data into zstd instead directly pointing it to the file like here, you will likely get worse results. However, in this case you can manually pass the size to zstd via a command line option.

| level    | compression time in min | size in GB | bandwidth in MB/s |
|---------:|------------------------:|-----------:|------------------:|
| --fast=5 |                      53 |         82 |               323 |
|        9 |                     175 |         48 |                98 |
|       19 |                    4581 |         43 |               3.7 |

Decompressing:

    { time zstd -T48 -dcf wikidata-20200330-all.json.zst > /dev/null; } 2> zst.time

Despite the documentation suggesting multi-threaded decompression support, I could not get it to actually use it: where ```-T48``` did use all available cores for compression, only one was used for decompression for all compression levels. Like in the case of lz4, decompression speed is so high that this hardly matters.

Also note that zstd, when compiled accordingly, can handle a few other formats as well, including xz. When testing, however, it did perform effectively identical to the native xz tools when decompressing the file generated by xz.

## Overview

For later use with filters, the bandwidth might be interesting, to compare the rate at which decompression can deliver data to the rate a filter can ingest them. Higher numbers are better.

Table: Bandwidth (of uncompressed data) in MB/s

|               | #cores | size in GB | cold cache | hot cache |
|:--------------|-------:|-----------:|-----------:|----------:|
| cat           |      1 |       1002 |        585 |       N/A |
| gzip          |      1 |         74 |        235 |       237 |
| bzip2         |      1 |         49 |            |        43 |
| xz            |      1 |         42 |            |       209 |
| pixz on xz    |      1 |         42 |            |       209 |
| pixz on xz    |      2 |         42 |            |       306 |
| pixz on xz    |     24 |         42 |            |       303 |
| pixz on xz    |     48 |         42 |            |       303 |
| pixz native   |      1 |         42 |            |       230 |
| pixz native   |     48 |         42 |            |       319 |
| lz4 -1        |      1 |        116 |       1413 |      1441 |
| lz4 -2        |      1 |        116 |            |      1276 |
| lz4 -3        |      1 |         86 |            |      1699 |
| lz4 -6        |      1 |         84 |            |      1839 |
| lz4 -9        |      1 |         84 |       1671 |      1845 |
| zstd --fast=5 |      1 |         82 |            |      1179 |
| zstd -9       |      1 |         48 |            |      1593 |
| zstd -19      |      1 |         43 |            |      1826 |

The same numbers can be presented in a different way, showing the time it takes to handle the complete dump. This can be interesting to judge how much time processing will need. Lower numbers are better.

Table: Time for reading (and decompressing, when applicable) whole dump, in seconds

|               | #cores | size in GB | cold cache | hot cache |
|:--------------|-------:|-----------:|-----------:|----------:|
| cat           |      1 |       1002 |       1566 |       N/A |
| gzip          |      1 |         74 |       4355 |      4332 |
| bzip2         |      1 |         49 |            |     23831 |
| xz            |      1 |         42 |            |      4902 |
| pixz on xz    |      1 |         42 |            |      4894 |
| pixz on xz    |      2 |         42 |            |      3346 |
| pixz on xz    |     24 |         42 |            |      3386 |
| pixz on xz    |     48 |         42 |            |      3383 |
| pixz native   |      1 |         42 |            |      4460 |
| pixz native   |     48 |         42 |            |      3219 |
| lz4 -1        |      1 |        116 |        726 |       712 |
| lz4 -2        |      1 |        116 |            |       804 |
| lz4 -3        |      1 |         86 |            |       604 |
| lz4 -6        |      1 |         84 |            |       558 |
| lz4 -9        |      1 |         84 |        614 |       556 |
| zstd --fast=5 |      1 |         82 |            |       870 |
| zstd -9       |      1 |         48 |            |       644 |
| zstd -19      |      1 |         43 |            |       562 |

You can see that even with the fastest methods (on this machine), just reading the entire dump takes about 30 minutes. No processing has been done at this point. Also, note again, just simply reading the uncompressed file from disk is *not* among the fastest methods: it is faster to read the much smaller, compressed file and decompress on-the-fly, in the case of lz4 and zstd.

## I/O Conclusion

With uncompressed dump file sizes of about 1 TB, the usage of compressed dumps is almost a must-have and the only question is which method to use. The only two formats in which WikiData provides dumps in are gzip and bzip2. Of those, bzip2 does provide noticeably smaller files (49 GB vs. 74 GB), but decompression takes 5-6 times longer. This increase means on my system going from about an hour to over 6 hours, which sounds bad. However, whether or not this matters depends on what you plan to do with the uncompressed data. If any of the steps in the processing pipeline after decompression is slower than bzip2's 43 MB/s, bzip2 would be fast enough, and thus, should be the format to download. This includes the case of recompressing using xz, but does not include for example lz4. However, also take into account that downloading the gzipped dump will take longer.

Is recompression into another format worth it? After all, other formats might be more suitable, especially when envisioning to use the dump files more than once, or when storing them for a longer time. They aren't exactly small, after all.

When storage space is premium, the xz format will be the format of your choice, producing the smallest files. With standard compression level settings, decompression tops at about 300 MB/s when using a parallel decompression implementation. However, since decompression does not scale well, using more than 2 cores does not give an advantage (leaving the others free). Decompressing xz will be a lot faster than bzip2.

However, when you can afford to use up to twice the amount of disk space, you can get almost ten times the decompression speed using lz4 or zstd, with speeds beyond 1.5 GB/s. The question then is: do you need that bandwidth?

### TL;TR:

- For download, the bzip2 format is, for almost all scenarios, the best choice, despite the comparatively slow decompression speed.
- When it comes to long-term storage, xz or zstd are your best choices. zstd looks promising with both great compression and decompression speeds, but the format itself is newer than xz, which means you likely have to install it yourself. xz on the other hand might fits your needs just as well and is likely available almost everywhere already. Decompression for xz tops at around 200 to 300 MB/s, depending on implementation.
- When you need really fast decompression, your best choices would be lz4 or zstd, which at relatively low compression levels also show fast compression. The performance of these fast methods show that it almost never makes any sense to store the uncompressed image on disk.

**My recommendation** for WikiData dumps: download bzip2, and if you plan to keep the dump around, recompress to either xz when storage is more important than speed, or lz4 if it is the other way around. When you are comfortable using zstd, use it with a compression level of about 9 and enjoy small files *and* fast decompression.

## Stay tuned for Part 2: Filtering within large JSON files

(to be published soon)

---
title: "How to assign a DOI to software within MPG"
author: Stephan Janosch
header:
  teaser: "/assets/images/500x300.png"
categories: 
  - How-to
tags:
  - update
language: en

---

This post will explain how you can assign a [DOI](https://en.wikipedia.org/wiki/Digital_object_identifier) to a piece of software within the Max Planck Society (MPG). I need to restrict the scope to the MPG, because the access to the [DOI service of the Max Planck Digital Library](https://doi.mpdl.mpg.de) is restricted. If you plan to release on Github, then the guide '[Making Your Code Citable](https://guides.github.com/activities/citable-code/)' helps you along.
 
### 1. Landing Page
 
One [requirement](https://doi.mpdl.mpg.de/faq/#req) for assigning the DOI is a public landing page. In my case I simply used the landing page of the project in our local [GitLab](https://gitlab.com/) installation.

![gitlab project page]({{ "/assets/img/blog/2017/doi-mpg-01.png" | prepend: site.baseurl }}){: width="1000px"}

### 2. Fill DOI Request Form

Next you head over to [https://doi.mpdl.mpg.de/request-doi/](https://doi.mpdl.mpg.de/request-doi/) and fill out and submit the form.

![mpdl doi service form]({{ "/assets/img/blog/2017/doi-mpg-02.png" | prepend: site.baseurl }}){: width="1000px"}

### 3. Confirm Request

The MPDL did choose an request confirmation via email. So will receive an email like that which you return to [DOI helpdesk](mailto:doi@mpdl.mpg.de). Then you wait for the confirmation to take place. 

> Dear ...,
>
>your eMail address was used to request a DOI name via the Max Planck Digital Library (MPDL). To confirm that a DOI name should be registered on your behalf for the content item described below, please return the complete eMail to doi@mpdl.mpg.de. 
>
> ...
>
> In addition, you confirm that all information provided is correct and permit the MPDL to store the data locally. You also agree that the location URL and bibliographic metadata will be transfered to the German National Library of Science and Technology (TIB) in order to register the DOI name. The TIB receives the metadata under the conditions of the Creative Commons CC0 1.0 Universal Public Domain Dedication.
>
>Best regards,
>your DOI helpdesk in the MPDL

### 4. Receiving the DOI

After a while, you will receive the DOI with a nice hand-craftet mail. Done. 

> Lieber Herr Janosch,
>
> vielen Dank fuer Ihre DOI-Anfrage. Fuer das Software-Paket wurde soeben die DOI 10.17617/1.46 vergeben und in wenigen Minuten sollte <https://doi.org/10.17617/1.46> auf die gemeldete URL umleiten.


### Bonus Step: Link to ORCID

With a few clicks more you can link your freshly minted DOI to your [ORCID](https://orcid.org/) record.
 
So open your ORCID profile and hit 'Add Works' -> 'Search & Link' -> 'DataCite'  

![orcid profile add content]({{ "/assets/img/blog/2017/doi-mpg-03.png" | prepend: site.baseurl }}){: width="1000px"}

After you allowed the DataCite to connect to your ORCID profile, you can 'Search' for your works.
 
![datacite home]({{ "/assets/img/blog/2017/doi-mpg-04.png" | prepend: site.baseurl }}){: width="1000px"}

Two clicks more on 'Add to ORCID record' and 'OK' completes the process.

![datacite add to ORCID record]({{ "/assets/img/blog/2017/doi-mpg-05.png" | prepend: site.baseurl }}){: width="1000px"}


### Question 1: Software vs Release

Software appears in different manifestations. You could refer to it as a specific release of your code (e.g. [version 0.3 of the plugin](https://gitlab.mpi-cbg.de/infrastructure/grails-mesa-plugin/tags/0.3)) or as software engineering project. If you are interested in the citation count you want to have only one DOI for your software. Opposite to this, you want to have a DOI for each release of your code. This ensures that protocols or workflows cite the exact version used in order to prevent reproducibility issues. 

The DataCite Metadata Schema ([version 4 pdf](https://schema.datacite.org/meta/kernel-4.0/doc/DataCite-MetadataKernel_v4.0.pdf)) knows some very handy relation types like:
      
      - IsNewVersionOf 
      - IsPreviousVersionOf 
      - IsPartOf
      - HasPart

It looks like, that Zenodo makes use of these, as [this example shows](https://data.datacite.org/10.5281/ZENODO.33687). I will try to speak with Martin Fenner (DataCite), who is giving a talk with the topic ['Workflows for assigning and tracking DOIs for scientific software'](https://events.tib.eu/nontextualinformation2017/programme/lecture/workflows-for-assigning-and-tracking-dois-for-scientific-software-1/) this wednesday, to get a better idea about metadate for software.  
 
 
### Question 2:  Changing Landing Page URL

According to the MPDL personell there is no interface right now for changing the landing page URL. Their advice was sending an email to the [DOI helpdesk](mailto:doi@mpdl.mpg.de) and submit your changes that way.   

### Summary

As you can see, assigning a DOI to a piece of software is not very hard. The easy interface provided by the MPDL helps a lot, but maybe an expert version of it is more appropriate for software? And it takes a bit patience because there is some waiting involved ([explaination?](https://blog.datacite.org/docker-solr/)). But the process in general is straight forward. 

Feel free to discuss this topic at our [communication channels (mailing list and/or slack)]({{ "/en/join.html" | prepend: site.baseurl }}). In case you have the desperate need to document the DOI assigning process for your own research organisation then head along and copy this post and push a pull request to our [website repo](https://github.com/DE-RSE/www). 😉     
 

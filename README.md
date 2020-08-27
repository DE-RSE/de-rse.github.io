# www.de-rse.org hosting repository

This repository contains the source files for the de-RSE website. Its official hosting URL is <https://www.de-rse.org>.

The site is made to be built with [Jekyll](https://jekyllrb.com/) >= 3.4.1.

To build, run `bundle install` once (or skip that if you have dependencies already installed and bundler does not work for you) and then  `bundle exec jekyll build`.
To preview locally, run `bundle exec jekyll serve --incremental` and browse to <http://localhost:4000>.
The `--incremental` flag helps speeding up the previews.
To include drafts in the preview add the `--drafts` flag.
To see where exactly something breaks or takes long, add the `--verbose` flag.
For all flags use the `--help` flag.

## Contributions

To contribute, please fork, change, test locally (see above) and create a pull request against `gh-pages`.

You can use [rake](http://rake.rubyforge.org/) to comfortably create content.

## Create content with `rake`

To create content, run one of the following commands from the repository root. `Rakefile` has been created by [Ellen Gummesson](http://ellengummesson.com/) and is hosted at <https://github.com/gummesson/jekyll-rake-boilerplate>.

`rake post["Title"]` creates a new blog post in `_posts`.

`rake draft["Title"]` creates a new blog post draft in `_drafts`

`rake publish` publishes blog post drafts from `_drafts` to `_posts` (interactive CLI-based picking of drafts to publish).

`rake page["Title"]` creates a new page (in the root folder).

`rake page["Title","Path/to/folder"]` creates a new page in the respective folder. E.g., to add a page to the English version of the site, use `rake["Title","en"]`.

## YAML headers for pages and posts

The repository contains minimal templates for pages and posts, `_page.txt` and `_post.txt`.

These are used when creating content with `rake` and include the minimal YAML headers needed for the content to show properly.

### Pages

    ---
    title:
    layout: default
    weight:
    ---

Pages always have the `default` layout. They must also have a (short) `title` (in double quotes preferably, so it doesn't mess with the YAML), which will be used for the main menu as item texts. `weight` determines the position of the respective menu item in the menu (ascending order).

### Posts

    ---
	title:
	layout: post
	author:
	menulang: en
	---

Blog posts will be displayed ordered by publication date on `blog.html`. They always have a `post` layout and must have a `title` and an `author`, both of which will be displayed on the blog index and the post page itself. Publication date is automatically added via `rake publish`. Do not start blog posts with headers (`#`), as the title will be displayed as header.

`menulang` determines the language of the main menu as displayed on the post page (default: `en`). The language menu items ("Deutsch", "English") link back to the blog index page in the respective language.

### Redirects

You can also redirect pages to another URL by using the `layout: redirect` and defining a page to redirect to using a [meta refresh](https://en.wikipedia.org/wiki/Meta_refresh).

    ---
    title: 
    layout: redirect
    redirect_page_to: https://xkcd.com
    ---

## kramdown

For help on syntax have a look at: 

- [quick reference](https://kramdown.gettalong.org/quickref.html)
- or [syntax](https://kramdown.gettalong.org/quickref.html) 

## Map

The map is fed by [mapdata.js](https://github.com/DE-RSE/www/blob/gh-pages/_includes/mapdata.js). Adding someone to the map is as simple as adding a new section in this geoJSON file. Coordinates are available from [http://geojson.io/](http://geojson.io/) . Right now pictures should be 75px high. Inspiration for a nice testimonial can be found at Stephan Druskat's entry.
   
The map appeared on Dec 6th 2017 on the website. It's based on [leaflet](http://leafletjs.com) v1.2 and [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
     
## Events
     
Events are included per year from https://github.com/DE-RSE/www/tree/gh-pages/_includes/events. No language specific remarks in favor of maintainability.

## Converting slack signup domain list

Direct sign up domain list from https://de-rse.slack.com/admin/settings#signup_mode .
Domains get added as people request invites.  

```
echo "mpi-cbg.de,mpg.de,tu-dresden.de,crt-dresden.de,hu-berlin.de,tib.eu,dlr.de,gfz-potsdam.de,fmp-berlin.de,rfii.de,uni-goettingen.de,gcdh.de,uni-bielefeld.de,uni-bonn.de,dfg.de,awi.de,geomar.de,uni-muenster.de,helmholtz-hzi.de,tu-berlin.de,pik-potsdam.de,leibniz-fli.de,uni-wuerzburg.de,helmholtz.de,uni-konstanz.de,ac.uk,tu-braunschweig.de,sub.uni-goettingen.de,gwdg.de,fu-berlin.de,hzdr.de" | tr "," "\n" | sort | awk '{print "<li>"$1"</li>" ;}'
```

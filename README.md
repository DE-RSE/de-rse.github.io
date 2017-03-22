# www.de-rse.org hosting repository

This repository contains the source files for the de-RSE website. Its official hosting URL is <http://www.de-rse.org>.

The site is made to be built with [Jekyll](https://jekyllrb.com/) >= 3.4.1.

To build, run `jekyll build`. To preview locally, run `jekyll serve` and browse to <http://localhost:4000>.

## Contributions

To contribute, please fork, change, test locally (see above) and create a pull request against `master`.

You can use [rake](http://rake.rubyforge.org/) to comfortably create content.

## Create content with `rake`

To create content, run one of the following commands from the repository root. `Rakefile` has been created by [Ellen Gummesson](http://ellengummesson.com/) and is hoste at <https://github.com/gummesson/jekyll-rake-boilerplate>.

`rake post["Title"]` creates a new blog post in `_posts`.

`rake draft["Title"]` creates a new blog post draft in `_drafts`

`rake publish` publishes blog post drafts from `_drafts` to `_posts` (interactive CLI picking of drafts to publish).

`rake page["Title"]` creates a new page.

`rake page["Title","Path/to/folder"]` creates a new page in the respective folder.

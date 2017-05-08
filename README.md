# www.de-rse.org hosting repository

This repository contains the source files for the de-RSE website. Its official hosting URL is <http://www.de-rse.org>.

The site is made to be built with [Jekyll](https://jekyllrb.com/) >= 3.4.1.

To build, run `jekyll build`. To preview locally, run `jekyll serve` and browse to <http://localhost:4000>.

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

### kramdown

For help on syntax have a look at: 

- [quick reference](https://kramdown.gettalong.org/quickref.html)
- or [syntax](https://kramdown.gettalong.org/quickref.html) 
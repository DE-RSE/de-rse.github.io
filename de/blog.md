---
title: "Blog"
layout: default
weight: 5
---
<!-- Set variable "lang" to reflect page language -->
{% assign pagelang = "de" %}

# Blog

{% for post in site.posts %}

<!-- Just show posts which shall be displayed in this language ("de", "en, de", "de, en") -->
{% if post.menulang contains pagelang %}

{% assign postlang = post.menulang | truncate: 2, '' %}

---

## [{{ post.title }}]({{ post.url | prepend: site.baseurl }})

<!-- Add hint if post is written in other language than page language -->
{% unless postlang == pagelang %}
  *Beitrag nur in Englisch verfügbar*
{% endunless %}

{{ post.author }}, {{ post.date | date: "%B %-d, %Y" }}

{{ post.excerpt }}

{% endif %}
{% endfor %}

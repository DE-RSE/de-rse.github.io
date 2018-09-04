---
title: "Blog"
layout: default
weight: 5
---
<!-- Set variable "lang" to reflect page language -->
{% if page.url contains "/en/" %}
  {% assign lang = "en" %}
{% elsif page.url contains "/de/" %}
  {% assign lang ="de" %}
{% endif %}

# Blog

{% for post in site.posts %}

<!-- Just show posts in paage language -->
  {% if post.menulang == lang %}

---

## [{{ post.title }}]({{ post.url | prepend: site.baseurl }})

{{ post.author }}, {{ post.date | date: "%B %-d, %Y" }}

{{ post.excerpt }}

  {% endif %}
{% endfor %}

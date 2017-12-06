---
title: "Blog"
layout: default
weight: 5
---

# Blog

{% for post in site.posts %}      

---

## [{{ post.title }}]({{ post.url | prepend: site.baseurl }})

{{ post.author }}, {{ post.date | date: "%B %-d, %Y" }}

{{ post.excerpt }}
{% endfor %}

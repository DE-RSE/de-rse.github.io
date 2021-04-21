---
layout: splash
permalink: /
title: de-RSE
header:
  overlay_color: "rgb(151,49,110)"
#   overlay_image: /assets/images/splash-background.png
  actions:
    - id: "member-action"
      # label is translated in page__hero.html template
      url: "/get-involved/membership/"
tagline: global.society-name # Translation key for the translated society name
intro: 
    - excerpt-translation: home/intro-excerpt.md # Long excerpt translations have their own files
feature_row:
  - image_path: ../assets/images/positions.png
    alt: "Positions"
    title-translation: home.positions-title # Translation key for the positions title
    excerpt-translation: home/positions-excerpt.md
    url: "/docs/configuration/"
    btn_class: "btn--primary"
    btn_label-translation: home.learn-more-button
  - image_path: ../assets/images/conf2019.png
    alt: "Conference series #deRSE"
    title: "Conference 2019"
    excerpt: "The 1st conference of Research Software Engineers, deRSE19, was held in June 2019 in Potsdam."
    url: "/docs/layouts/"
    btn_class: "btn--primary"
    btn_label-translation: home.learn-more-button
  - image_path: ../assets/images/nfdi4rse.png
    alt: "NFDI4RSE"
    title: "NFDI4RSE"
    excerpt: "National Research Data Infrastructure (NFDI) consortium for research software, led by the de-RSE community."
    url: "http://rse4nfdi.de"
    btn_class: "btn--primary"
    btn_label-translation: home.go-to-website-button
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}
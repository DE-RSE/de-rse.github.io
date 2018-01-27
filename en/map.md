---
title: "Map"
layout: default
weight: 4
---

# RSEs in Germany

Elsewhere in Europe and the world, people who develop scientific software or research software are already referred to as Research Software Engineers (RSEs), and are grouped under that term regardless of their job title and degree. RSE is a collective term for researchers and scientists who develop software and are otherwise involved in software development, regardless of the nature and extent of their activities and regardless of their experience or knowledge.

de-RSE addresses both, software-developing researchers, PhD students and postdocs as well as computer scientists and other computer science professionals, scripting administrators and software project managers active in research - and all those who professionally contribute to software development in science and research.

Is this you? Then add yourself and show who we are: <https://github.com/DE-RSE/www/blob/gh-pages/_includes/mapdata.js>

What others say what an RSE is: <http://www.de-rse.org/en/map.html#what-others-say-what-an-rse-is>

## Map

<div id="map-container" style="height:1100px;"></div>

<script type="text/javascript" src="{{ "/js/leaflet.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript" src="{{ "/js/leaflet.markercluster.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript">


function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


var map = L.map('map-container').setView([51.000,10.316], 7);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

{% include mapdata.js %}

var featureGroup = L.markerClusterGroup();
featureGroup.addLayer(
	L.geoJSON(rseFeatures, {
                      	onEachFeature: onEachFeature
                      }
	  )
  );

map.addLayer(featureGroup);
</script>

<br/>
<br/>
Map made with [http://leafletjs.com](http://leafletjs.com), Clustering via [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)

## What others say what an RSE is

### UKRSE

A growing number of people in academia combine expertise in programming with an intricate understanding of research. Although this combination of skills is extremely valuable, these people lack a formal place in the academic system. This means there is no easy way to recognise their contribution, to reward them, or to represent their views.Without a name, it is difficult for people to rally around a cause, so we created the term Research Software Engineer.

Mehr unter: <http://rse.ac.uk/>

### NL-RSE

Without a name, it is difficult to refer to a group of people that share a set of skills and characteristics. A name must be descriptive, yet short enough to be meaningful. It must differentiate and be acceptable to both the people who identify with it and the academic community. In 2012, when trying to form a community of people working on software in academia in the UK, a lot of thought and discussion went into what term to use. Eventually, the new name was created by fusing the two skills that make it unique: an understanding of both research and software engineering.

Quoting from the paper that marked the start of the Research Software Engineer community in the UK: Research institutions need individuals with a new professional designation — the research software engineer. These individuals combine a professional attitude to the exercise of software engineering with a deep understanding of research topics. They lead the design and construction of increasingly complex research software systems, and play an important part in the co-design of research requirements, understanding and addressing software engineering questions that arise in research planning (Baxter et al., 2012)

RSEs are often embedded in research groups in small teams, or even by themselves, working hard on the software, algorithms, tools and interfaces that facilitate cutting-edge research. And in many cases, they are academic researchers at the same time, holding positions as (assistant/associate) professor, postdoc or PhD candidate. RSEs closely collaborate with researchers to understand the challenges they face, and then develop research software to provide the answers. Some have started as researchers who spent a lot of time developing software to do their research. Others have started as software developers who have developed a strong affinity with scientific research.

Mehr unter: <https://blog.esciencecenter.nl/introducing-nl-rse-98431969e2b8>

---
title: "Map"
layout: default
weight: 4
---

# RSEs in Germany

Elsewhere in Europe and the world, people who develop scientific software or research software are already referred to as Research Software Engineers (RSEs), and are grouped under that term regardless of their job title and degree. RSE is a collective term for researchers and scientists who develop software and are otherwise involved in software development, regardless of the nature and extent of their activities and regardless of their experience or knowledge.

de-RSE addresses both, software-developing researchers, PhD students and postdocs as well as computer scientists and other computer science professionals, scripting administrators and software project managers active in research - and all those who professionally contribute to software development in science and research.

Is this you? Then add yourself and show who we are: <https://github.com/DE-RSE/www/blob/gh-pages/_includes/mapdata.js>

## Map

<div id="map" style="height:1100px;"></div>

<script type="text/javascript" src="{{ "/js/leaflet.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript" src="{{ "/js/leaflet.markercluster.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript">


function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


var map = L.map('map').setView([51.000,10.316], 7);

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

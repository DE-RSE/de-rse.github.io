---
title: "Map"
layout: default
weight: 4
---

<div id="map" style="height:1100px;"></div>

<script type="text/javascript" src="{{ "/js/leaflet.js" | prepend: site.baseurl }}"></script>
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


L.geoJSON(rseFeatures, {
	onEachFeature: onEachFeature
}).addTo(map);
</script>

<br/>
<br/>
Map made with [http://leafletjs.com](http://leafletjs.com)
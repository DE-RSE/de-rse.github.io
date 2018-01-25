---
title: "Karte"
layout: default
weight: 4
---

# RSEs in Deutschland

Andernorts in Europa und in der Welt werden Personen, die wissenschaftliche Software bzw. Forschungssoftware
entwickeln, bereits als Research Software Engineers (RSEs) bezeichnet und unabhängig von ihrer Stellenbezeichnung und ihrem Abschluss unter diesem Begriff zusammengefasst. RSE ist ein Sammelbegriff für in der Forschung und in den Wissenschaften tätige Personen, die Software entwickeln und anderweitig in die Softwareentwicklung involviert sind, unabhängig von der Art und dem Umfang ihrer Tätigkeit und unabhängig von Erfahrung und Kenntnisstand.

de-RSE adressiert gleichermaßen Software entwickelnde Wissenschaftlerinnen und Wissenschaftler, in der Forschung tätige Informatikerinnen und Informatiker und andere aus den Computerwissenschaften stammende Personen, skriptende Administratorinnen und Administratoren, (Post-)Doktorandinnen und (Post-)Doktoranden, in der Forschung tätige Studentinnen und Studenten, Softwareprojektmanagerinnen und -projektmanager sowie all jene, die einen Beitrag zur Softwareentwicklung in Wissenschaft und Forschung leisten.

Zeig, dass Du dazu gehörst: <https://github.com/DE-RSE/www/blob/gh-pages/_includes/mapdata.js>

## Karte

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

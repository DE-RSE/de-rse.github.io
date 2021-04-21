---
title: "Verteilung der Umfrage in Deutschland"
author: Stephan Janosch
header:
  teaser: "/assets/images/500x300.png"
categories: 
  - Jekyll
tags:
  - update
language: de

---

Die Auswertung der [Umfrage](https://www.de-rse.org/blog/2017/10/19/umfrage-forschungssoftware-beteiligten-personen-deutschland-2017.html) geht langsam voran, hier schon einmal die geographische Verteilung der Antworten. Das Clustering summiert die Beteiligungen der einzelnen Institutionen. Die Zahl gibt an, wieviel Antworten von wo zur Studie beigetragen haben.   

Hinweis: Die Koordinaten der Institute stammt aus [Wikidata](https://www.wikidata.org/). Da dort nicht immer Koordinaten hinterlegt sind oder meine Abfrage die Institution nicht erfasst haben mag, sind hier nur 269 von 325 Beteiligungen zu sehen.

Nachtrag: Statisches Bild für Betrachter ohne Javascript hinzugefügt.

<noscript>
<img src="/assets/img/blog/2018/deRSE_survey_geom_distr.jpg" alt="geographische Verteilung der Umfragebeteiligungen">
</noscript>
<div id="map" style="height:1100px;"></div>

<script type="text/javascript" src="{{ "/js/leaflet.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript" src="{{ "/js/leaflet.markercluster.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript">


function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

function myPointToLayer(geoJsonPoint, latlng) {
             return L.marker(latlng, {icon: L.divIcon({className: 'survey-icon',iconSize: new L.Point(20, 20),html:geoJsonPoint.properties.value})}); 
}

var map = L.map('map').setView([51.000,10.316], 7);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

{% include js/study2017.js %}

function myClustering(cluster) {
		var childCount = cluster.getChildCount();
		var c = ' marker-cluster-';
		if (childCount < 10) {
			c += 'small';
		} else if (childCount < 100) {
			c += 'medium';
		} else {
			c += 'large';
		}
		var markers = cluster.getAllChildMarkers();
		var n = 0;
        for (var i = 0; i < markers.length; i++) 
        {
        	n += markers[i].feature.properties.value;
        }
		return new L.DivIcon({ html: '<div><span>' + n + '</span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
}

var surveyGroup = L.markerClusterGroup(
	{
		iconCreateFunction:myClustering
	}
);
var surveyLayer = 	L.geoJSON(surveyFeatures, {
                                     	onEachFeature: onEachFeature,
                                     	pointToLayer:myPointToLayer
                                     }
               	  );
surveyGroup.addLayer(surveyLayer);
map.addLayer(surveyGroup);

</script>

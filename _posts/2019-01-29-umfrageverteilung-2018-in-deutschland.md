---
title: "Umfrageverteilung 2018 in Deutschland"
author: Stephan Janosch
header:
  teaser: "/assets/images/500x300.png"
categories: 
  - Jekyll
tags:
  - update
language: de

---

Ähnlich wie im [letzten Jahr](/blog/2018/03/06/verteilung-der-umfrage-in-deutschland.html) kann auch die Beteiligung an der [RSE-Umfrage 2018](https://github.com/softwaresaved/international-survey/tree/master/analysis/2018) grafisch dargestellt werden. Das Clustering summiert die Beteiligungen der einzelnen Institutionen. Die Zahl gibt an, wieviel Antworten von wo zur Studie beigetragen haben.   

Hinweis: Dieses mal liessen sich nur 268 von 333 Beteiligungen zu verorten.

Hinweis 2: Falls der Feedreader die Karte nicht interaktiv anzeigt, dann bitte den Beitrag im Blog direkt anschauen.


<noscript>
<img src="/assets/img/blog/2019/deRSE_survey_geom_distr_2018.jpg" alt="geographische Verteilung der Umfragebeteiligungen">
</noscript>
<div id="map2018" style="height:1100px;"></div>

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

var map2018 = L.map('map2018').setView([51.000,10.316], 7);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2018);

{% include js/survey2018_distribution.js %}

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

var surveyGroup2018 = L.markerClusterGroup(
	{
		iconCreateFunction:myClustering
	}
);
var surveyLayer2018 = 	L.geoJSON(surveyFeatures2018, {
                                     	onEachFeature: onEachFeature,
                                     	pointToLayer:myPointToLayer
                                     }
               	  );
surveyGroup2018.addLayer(surveyLayer2018);
map2018.addLayer(surveyGroup2018);

</script>

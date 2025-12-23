---
title: "Karte"
layout: default
weight: 40
---

# RSEs in Deutschland

Andernorts in Europa und in der Welt werden Personen, die wissenschaftliche Software bzw. Forschungssoftware entwickeln, bereits als Research Software Engineers (RSEs) bezeichnet und unabhängig von ihrer Stellenbezeichnung und ihrem Abschluss unter diesem Begriff zusammengefasst. RSE ist ein Sammelbegriff für in der Forschung und in den Wissenschaften tätige Personen, die Software entwickeln und anderweitig in die Softwareentwicklung involviert sind, unabhängig von der Art und dem Umfang ihrer Tätigkeit und unabhängig von Erfahrung und Kenntnisstand.

de-RSE adressiert gleichermaßen Software entwickelnde Wissenschaftlerinnen und Wissenschaftler, in der Forschung tätige Informatikerinnen und Informatiker und andere aus den Computerwissenschaften stammende Personen, skriptende Administratorinnen und Administratoren, (Post-)Doktorandinnen und (Post-)Doktoranden, in der Forschung tätige Studentinnen und Studenten, Softwareprojektmanagerinnen und -projektmanager sowie all jene, die einen Beitrag zur Softwareentwicklung in Wissenschaft und Forschung leisten.

Zeig, dass Du dazu gehörst: <https://github.com/DE-RSE/de-rse.github.io/blob/master/_includes/mapdata.js>

Wie-andere-RSE-definieren: <https://www.de-rse.org/de/map.html#wie-andere-rse-definieren>

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

function myPointToLayer(geoJsonPoint, latlng) {
             return L.marker(latlng, {icon: L.divIcon({className: 'survey-icon',iconSize: new L.Point(20, 20),html:geoJsonPoint.properties.value})}); 
}

var map = L.map('map').setView([51.000,10.316], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

{% include mapdata.js %}

var featureGroup = L.markerClusterGroup();
var rseLayer = 	L.geoJSON(rseFeatures, {
                                     	onEachFeature: onEachFeature
                                     }
               	  );
 
featureGroup.addLayer(rseLayer);
map.addLayer(featureGroup);

//var surveyGroup = L.markerClusterGroup();
//var surveyLayer = 	L.geoJSON(surveyFeatures, {onEachFeature: onEachFeature,pointToLayer:myPointToLayer});
//surveyGroup.addLayer(surveyLayer);
//map.addLayer(surveyGroup);

//var myIcon = L.divIcon({className: 'my-div-icon',html:'blah'});
// you can set .my-div-icon styles in CSS
//L.marker([50.505, 10.316], {icon: myIcon}).addTo(map);


//var overlayMaps = {  "RSEs":featureGroup,  "survey 2017":surveyGroup};
//L.control.layers(null, overlayMaps).addTo(map);
</script>

<br/>
<br/>
Map made with [http://leafletjs.com](http://leafletjs.com), Clustering via [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)

## Wie andere RSE definieren

### UK RSE

A growing number of people in academia combine expertise in programming with an intricate understanding of research. Although this combination of skills is extremely valuable, these people lack a formal place in the academic system. This means there is no easy way to recognise their contribution, to reward them, or to represent their views.Without a name, it is difficult for people to rally around a cause, so we created the term Research Software Engineer.

Mehr unter <https://society-rse.org/>.

### NL-RSE

Without a name, it is difficult to refer to a group of people that share a set of skills and characteristics. A name must be descriptive, yet short enough to be meaningful. It must differentiate and be acceptable to both the people who identify with it and the academic community. In 2012, when trying to form a community of people working on software in academia in the UK, a lot of thought and discussion went into what term to use. Eventually, the new name was created by fusing the two skills that make it unique: an understanding of both research and software engineering.

Quoting from the paper that marked the start of the Research Software Engineer community in the UK: Research institutions need individuals with a new professional designation — the research software engineer. These individuals combine a professional attitude to the exercise of software engineering with a deep understanding of research topics. They lead the design and construction of increasingly complex research software systems, and play an important part in the co-design of research requirements, understanding and addressing software engineering questions that arise in research planning (Baxter et al., 2012)

RSEs are often embedded in research groups in small teams, or even by themselves, working hard on the software, algorithms, tools and interfaces that facilitate cutting-edge research. And in many cases, they are academic researchers at the same time, holding positions as (assistant/associate) professor, postdoc or PhD candidate. RSEs closely collaborate with researchers to understand the challenges they face, and then develop research software to provide the answers. Some have started as researchers who spent a lot of time developing software to do their research. Others have started as software developers who have developed a strong affinity with scientific research.

Mehr unter: <https://blog.esciencecenter.nl/introducing-nl-rse-98431969e2b8>

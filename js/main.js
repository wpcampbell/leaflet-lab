/*Stylesheet by Will P. Campbell,2021*/

var mymap = L.map('mapid').setView([44.5,-90], 6.75);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery   <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.mapbox-terrain-v2',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid3BjYW1wYmVsbCIsImEiOiJja3Fza2RxMnMxeTh2MnhzYmpxbDV6ZTRkIn0.UQhYco5_eD8IXTwwrULz4A'
}).addTo(mymap);

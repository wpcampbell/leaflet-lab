/*Stylesheet by Will P. Campbell,2021*/

var map = L.map('mapid').setView([44.5,-90], 6);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
}).addTo(map);

var Toe_11000 = [{"type":"FeatureCollection", "features": [
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-89.01714901099996,47.701660041000025],[-88.98864567199996,47.67105872900004],[-88.89693208899996,47.632717624000065],[-88.76124959199996,47.56169631900008],[-88.58375016199994,47.49178961600006],[-88.44017698199997,47.44707161100007],[-88.30330388599998,47.44691295700005],[-88.17169811099996,47.44667491700005],[-88.02148343399995,47.45132287700005],[-87.87715720599994,47.43981218000005],[-87.74844734199996,47.433784306000064],[-87.64558455399998,47.43885976400003],[-87.53193680099997,47.44896815100003],[-87.38107493899997,47.46526214000005],[-87.24572687999995,47.48530297000008],[-87.13143423099996,47.50392737300007],[-86.98182199599995,47.53937042800004],[-86.82927429899996,47.57632309400003],[-86.62586405499997,47.62051563700004],[-86.53722267999996,47.642872296000064],[-86.52848360499996,47.655108436000035],[-86.66049972099995,47.65724573000006],[-89.01447077999995,47.70342257000004],[-89.01714901099996,47.701660041000025]]]},"properties":{"OBJECTID_1":1,"OBJECTID":1,"Years_Ago":11000,"SHAPE_Leng":387749.141631,"Shape_Le_1":5.06435076694,"Shape_Area":0.429078160361}}
    ]
}];

L.geoJSON(Toe_11000, {
    style: function(feature) {
        switch (feature.properties.Years_Ago) {
            case 11000: return {color:"#ff7800"};
        }
    }
}).addTo(map);



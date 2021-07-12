$.ajax(data/Glacier_Toe_11000.json, {
    dataType: "json",
    success: function(response) {

        L.geoJson(response).addTo(mymap);
    }
})
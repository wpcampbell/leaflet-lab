function getData(map) {
    $.ajax("data/Glacier_Toe_11000.json", {
        dataType: "json",
        success: function(response){
            var attributes = processData(response);
            createPropSymbols(response, map, attributes);
        }
    });
};
L.geoJson(response).addTo(map);
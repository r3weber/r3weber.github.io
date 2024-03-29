// var lat = document.getElementById('latElement').value;
// var lon = document.getElementById('lonElement').value;
var mymap = L.map('mapid').setView([39.97668989, -105.26395322],13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicjN3ZWJlcjEiLCJhIjoiY2lyM3lhc3FnMDFrZ2Zwbm04cncwa2JkMiJ9.AeYZqyDiobmuxAVfIKE8gA'
}).addTo(mymap);

// $.getJSON("https://r3weber.github.io/assets/geoJson/arrowgoldmetadata.geojson", function(data) {
//     L.geoJson(data).addTo(mymap);
// });


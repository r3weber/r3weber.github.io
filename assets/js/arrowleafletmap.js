var mymap = L.map('mapid').setView([39.7392, -104.9847], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicjN3ZWJlcjEiLCJhIjoiY2lyM3lhc3FnMDFrZ2Zwbm04cncwa2JkMiJ9.AeYZqyDiobmuxAVfIKE8gA'
}).addTo(mymap);



// L.marker([51.5, -0.09]).addTo(mymap)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

function receivedNewEOSPosition(lat, lon, elv, numSatsUsed, pdop, hdop, vdop, diffAge, diffType, diffStn,
xyzAccuracy, zAccuracy, xyAccuracy, geoidSep){
//  var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "numSatsUsed": numSatsUsed
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [lat, lon, elv]
//     }
// };
// L.geoJSON(geojsonFeature).addTo(mymap);
var latlng = L.latlon(lat, lon);
L.marker(latlng).addTo(mymap);
    // .bindPopup(`<h2>Lat: ${lat}</h2>\n<h2>Long:${lon}</h2>`)
    // .openPopup();
L.map('mapid').setView(latlng, 10);  
}


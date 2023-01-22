
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFya2RlY2lzaW9uIiwiYSI6ImNrdHcwMDB3NjIybzczMm5xNG0zcTl4dzgifQ.sxkYzsplQk6X08U_hANwrQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/darkdecision/cktw1mvh20crl17m07vvil8da',
});
const marker = new mapboxgl.Marker({
    color: "#000000",
    draggable: false
}).setLngLat([2.3364, 48.86091])
    .addTo(map);
const marker1 = new mapboxgl.Marker({
color: "#808080",
draggable: false
}).setLngLat([2.3333, 48.8602])
.addTo(map);
const marker2 = new mapboxgl.Marker({
color: "#808080",
draggable: false
}).setLngLat([2.3397, 48.8607])
.addTo(map);
const marker3 = new mapboxgl.Marker({
color: "#808080",
draggable: false
}).setLngLat([2.3330, 48.8619])
.addTo(map);
const marker4 = new mapboxgl.Marker({
color: "#808080",
draggable: false
}).setLngLat([2.3365, 48.8625])
.addTo(map);

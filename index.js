var map = L.map('map').setView([50, 0], 3);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
	maxZoom: 6,
    minZoom: 2
}).addTo(map);

function setMapJson(json) {
    console.log(json);
    json.forEach(element => {
        L.geoJSON(element).addTo(map);
    });
}

fetch('./MAP.geojson').then((response) => response.json())
    .then((json) => setMapJson(json.features));
var map = L.map('map').setView([50, 0], 3);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
	maxZoom: 6,
    minZoom: 2
}).addTo(map);


var point_marker = L.icon({
    iconUrl: '/static/imgs/map/point_marker.png',
    iconSize: [16, 16]
});

var capital_point_marker = L.icon({
    iconUrl: '/static/imgs/map/capital_point_marker.png',
    iconSize: [16, 16]
});

function setMapJson(json, coutry) {
    json.forEach(element => {
        L.geoJSON(element, {
            style: {
                fillColor: element.properties.fill,
                color: element.properties.stroke
            },
            pointToLayer: function(feature, latlng) {
                let icon_f = capital_point_marker;
                if (feature.properties.type.valueOf() == "city") icon_f = point_marker; 
                else icon_f = capital_point_marker;
            
                return L.marker(latlng, 
                {icon: icon_f}).bindPopup(feature.properties.name);
            },
            onEachFeature: function (feature, latlng) {
                if (feature.geometry.type != "Point") latlng.bindPopup(`<div class="coutry"><img src="/static/imgs/countries/${coutry.id}.png"><b>${coutry.name}</b></div>`);
            }
        }).addTo(map);
    });
}

fetch('/static/json/countries.json').then((response) => response.json())
    .then((json) => {
        console.log(json);
        json.countries.forEach(element => {
            fetch(`/static/json/countries/${element.id}.geojson`).then((response) => response.json())
                .then((json) => setMapJson(json.features, element));
        });
    });
window.onload = function() {
    fetch('/static/json/countries.json').then((response) => response.json())
        .then((json) => {
            json.countries.forEach(element => {
                fetch("/api/country.php?id="+element+"&q=name").then((response) => response.text()).then((name) => {
                    document.querySelector(".countries-list").innerHTML += "'" + name.replace("<", "<'") + "'";
                });
            });
        });
}

window.onload = function() {
    alert("cr");
    fetch('/static/json/countries.json').then((response) => response.json())
        .then((json) => {
            json.countries.forEach(element => {
                alert(element);
            });
        });
}

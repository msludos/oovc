window.onload = function() {
    alert("cr");
    fetch('/static/json/countries.json').then((response) => response.json())
        .then((json) => {
            json.countries.forEach(element => {
                alert(element);
                $.get("/api/country.php?id="+element+"&q=name", function(data) {
                    alert(data);
                });
                //fetch("/api/country.php?id="+element+"&q=name").then((response) => response.text()).then((tex) => alert(tex));
            });
        });
}

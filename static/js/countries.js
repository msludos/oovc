window.onload = function() {
    alert("cr");
    fetch('/static/json/countries.json').then((response) => response.text())
        .then((json) => {
            alert(json);
            json.countries.forEach(element => {
                alert($.get(`https://oovc.vercel.app/api/country.php?id=${element}&q=name`));
            });
        });
}

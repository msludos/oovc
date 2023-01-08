window.onload = function() {
    fetch('/api/allcountries.php').then((response) => response.text())
        .then((txt) => {
            let jsons = txt.split("~");
            jsons.forEach(element => {
                if (element == "") continue;
                let json = JSON.parse(element);
                document.querySelector(".countries-list").innerHTML += json.name;
            });
    });
}

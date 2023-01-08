window.onload = function() {
    fetch('/api/allcountries.php').then((response) => response.text())
        .then((txt) => {
            let jsons = txt.split("~");
            alert(txt);
            jsons.forEach(element => {
                if (element == "") continue;
                let json = JSON.parse(element);
                alert(element);
                alert(json.name);
                document.querySelector(".countries-list").innerHTML += json.name;
            });
    });
}

window.onload = function() {
    try {
    fetch('/api/allcountries.php').then((response) => response.text())
        .then((txt) => {
            let jsons = txt.split("~");
            //alert(txt);
            jsons.forEach(element => {
                //alert(element);
                let json = JSON.parse(element)
                //alert(json.name);
                document.querySelector(".countries-list").innerHTML += json.name;
            });
    });
   } catch (e) { alert(e);}
}

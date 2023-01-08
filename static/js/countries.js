window.onload = function() {
    try {
    fetch('/api/allcountries.php').then((response) => response.text())
        .then((txt) => {
            let jsons = txt.split("~");
            alert(txt);
            jsons.forEach(element => {
                alert(element);
            });
    });
   } catch (e) { alert(e);}
}

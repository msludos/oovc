window.onload = function() {
    try {
    fetch('/api/allcountries.php').then((response) => response.text())
        .then((txt) => {
            
            alert(txt);
            
    });
   } catch (e) { alert(e);}
}

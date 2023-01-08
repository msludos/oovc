window.onload = function() {
    fetch('/api/allcountries.php').then((response) => response.text())
        .then((txt) => {
            let jsons = txt.split("~");
            //alert(txt);
            jsons.forEach(element => {
                //alert(element);
                let json = JSON.parse(element)
                //alert(json.name);
                document.querySelector(".countries-list").innerHTML += `
                <div class="country">
                    <img src="${json.flag}">
                    <div class="text">
                        <h4>${json.name}</h4>
                        ${json.text.slice(1, 130)}
                    </div>
                </div>
                `;
            });
    });
}

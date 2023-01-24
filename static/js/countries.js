window.onload = function() {
    fetch('/api/allcountries.php').then((response) => response.text())
        .then((txt) => {
            let jsons = txt.split("~");
            consol.log(txt);
            jsons.forEach(element => {
                console.log(element);
                let json = JSON.parse(element)
                if (json.status == -1) return;
                document.querySelector(".countries-list").innerHTML += `
                <div class="country">
                    <img src="${json.flag}">
                    <div class="text">
                        <h4><a href="/sections/countries/country.html?id=${json.id}">${json.name}</a></h4>
                        ${json.text.split("|")[0]}
                    </div>
                </div>
                `;
            });
    });
}

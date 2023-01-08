window.onload = function() {
    fetch('/api/allcountries.php').then((response) => response.text())
        .then((txt) => {
            let jsons = txt.split("~");
            jsons.forEach(element => {
                let json = JSON.parse(element)
                document.querySelector(".countries-list").innerHTML += `
                <div class="country">
                    <img src="${json.flag}">
                    <div class="text">
                        <h4><a href="/sections/countries/country.html?id=${json.id}">${json.name}</a></h4>
                        ${json.text.slice(0, 130)}
                    </div>
                </div>
                `;
            });
    });
}

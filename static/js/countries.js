window.onload = function() {
    fetch('/static/json/countries.json').then((response) => response.json())
    .then((json) => {
        let page = new URLSearchParams(location.search);

        for (let i = 0+12*(page.get("page")-1); i <= 12+12*page.get("page"); i++) {
            let elem = json.countries[i];
            
            document.querySelector(".countries-list").innerHTML += `
            <div class="country">
                <img src="/static/imgs/countries/${elem.id}.png" alt="logo">
                <div class="text">
                    <a href="/sections/countries/country.html?id=${elem.id}"><h4>${elem.name}</h4></a>
                    ${elem.text.slice(0, 130)}
                </div>
            </div>
            `;
        }
    });
}
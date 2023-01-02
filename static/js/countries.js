window.onload = function() {
    fetch('/static/json/countries.json').then((response) => response.json())
    .then((json) => {
        let page = new URLSearchParams(location.search);

        for (let i = 0+12*(page.get("page")-1); i <= 12+12*page.get("page"); i++) {
            let elem = json.countries[i];
            
            $.get(`https://oovc.vercel.app/api/country.php?id=${elem}&q=name`, function(name) {
                $.get(`https://oovc.vercel.app/api/country.php?id=${elem}&q=flag`, function(flag) {
                    $.get(`https://oovc.vercel.app/api/country.php?id=${elem}&q=text`, function(text) {
                        document.querySelector(".countries-list").innerHTML += `
                        <div class="country">
                        <img src="${flag}" alt="logo">
                        <div class="text">
                            <a href="/sections/countries/country.html?id=${elem}"><h4>${name}</h4></a>
                            ${text.slice(0, 130)}
                        </div>
                        </div>
            `;
        }
                    });
                });
            });
        } 
    });
}

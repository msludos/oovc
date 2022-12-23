window.onload = function() {
    fetch('/static/json/countries.json').then((response) => response.json())
        .then((json) => {
            console.log(json.countries);
            json.countries.forEach(country => {
                if (country.id == new URLSearchParams(location.search).get("id")) {
                    document.querySelector(".aside img").setAttribute("src", "/static/imgs/countries/"+country.id+".png");
                    document.querySelector(".date").innerHTML = country.date;
                    document.querySelector(".description").innerHTML = country.text;

                    document.querySelector(".vk").setAttribute("href", country.vk);
                    document.querySelector(".author").setAttribute("href", "https://vk.com/id"+country.id);
                    document.querySelector(".site").setAttribute("href", country.site);
                }
        });
    });
}
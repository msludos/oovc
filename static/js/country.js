window.onload = function() {
    if (location.search != "") {
        fetch('/static/json/countries.json').then((response) => response.json())
            .then((json) => {
                let queue = false;
                let country = json;

                json.countries.forEach(element => {
                    if (element.id == new URLSearchParams(location.search).get("id")) {
                        queue = true;
                        country = element;
                    }
                });

                if (queue) {
                    document.querySelector(".description").innerHTML = country.text;
                    document.querySelector(".w img").setAttribute("src", `/static/imgs/countries/${country.id}.png`);
                    document.querySelector(".date").innerHTML = country.date;
                    document.querySelector(".vk").innerHTML = country.vk;
                    document.querySelector(".author").innerHTML = country.author;
                    document.querySelector(".site").innerHTML = country.site;
                    document.querySelector(".vk").setAttribute("href", "https://"+country.vk);
                    document.querySelector(".author").setAttribute("href", "https://"+country.author);
                    document.querySelector(".site").setAttribute("href", "https://"+country.site);
                    document.querySelector("title").innerHTML = country.name;
                } else {
                    location.href = "/countries";
                }
    });
    } else {
        location.href = "/countries";
    }
}
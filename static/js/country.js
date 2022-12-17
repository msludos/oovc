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

                    if (country.vk != "") 
                        document.querySelector(".vk").setAttribute("href", "https://"+country.vk);
                    else{
                        let dp = document.querySelector(".info");
                        let ds = document.querySelector(".vk");
                        dp.removeChild(ds);
                    }

                    if (country.author != "") 
                        document.querySelector(".author").setAttribute("href", "https://"+country.author);
                    else{
                        let dp = document.querySelector(".info");
                        let ds = document.querySelector(".author");
                        dp.removeChild(ds);
                    }

                    if (country.site != "") 
                        document.querySelector(".site").setAttribute("href", "https://"+country.site);
                    else {
                        let dp = document.querySelector(".info");
                        let ds = document.querySelector(".site");
                        dp.removeChild(ds);
                        ds = document.querySelector("br");
                        dp.removeChild(ds);
                    }
                    
                    document.querySelector("title").innerHTML = country.name;
                } else {
                    location.href = "/countries";
                }
    });
    } else {
        location.href = "/countries";
    }
}
window.onload = function() {
    fetch('/api/allcountries.php').then((response) => response.text())
        .then((txt) => {
            let jsons = txt.split("~");
            console.log(txt);
            jsons.forEach(element => {
                console.log(element);
                let json = JSON.parse(element)
                if (json.status == -1) return;
                
                let status = "";
                if (json.status == 0) status = " находится на рассмотрении"
                if (json.status == 1) status = " подтверждено"
                if (json.status == 2) status = " привелегирировано"

                document.querySelector(".countries-list").innerHTML += `
                <div class="country">
                    <img src="${json.flag}">
                    <div class="text">
                        <h4><a href="/sections/countries/country.html?id=${json.id}">${json.name}</a><img src="/static/imgs/status/${json.status}.png" title="Государство${status}"></h4>
                        ${json.text.split("|")[0]}
                    </div>
                </div>
                `;
            });
    });
}

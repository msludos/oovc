window.onload = function() {
    fetch('/static/json/countries.json').then((response) => response.json())
        .then((json) => {
            console.log(json.countries);
            json.countries.forEach(country => {
                if (country.id == new URLSearchParams(location.search).get("id")) {
                    $.get(`https://oovc.vercel.app/api/country.php?id=${country.id}&fields=name,flag,date,text,vk,author,site`, function(data) {
                        let datas = data.split("~");
                        
                        document.querySelector(".aside img").setAttribute("src", datas[1]);
                        document.querySelector(".date").innerHTML = datas[2];
                        document.querySelector(".description").innerHTML = datas[3];

                        document.querySelector(".vk").setAttribute("href", datas[4]);
                        document.querySelector(".author").setAttribute("href", datas[5]);
                        document.querySelector(".site").setAttribute("href", datas[6]);
                    });
                    break;
                }
        });
    });
}

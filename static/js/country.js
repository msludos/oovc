window.onload = function() {
    fetch('https://oovc.vercel.app/api/countriesid.php').then((response) => response.json())
        .then((json) => {
            console.log(json.list);
            json.list.forEach(country => {
                if (country == new URLSearchParams(location.search).get("id")) {
                    $.get(`https://oovc.vercel.app/api/country.php?id=${country}&fields=name,flag,date,text,vk,author,site`, function(data) {
                        let datas = data.split("~");
                        
                        console.log(datas);
                        
                        document.querySelector("title").innerText = datas[0];
                        
                        document.querySelector(".aside img").setAttribute("src", datas[1]);
                        document.querySelector(".date").innerHTML = datas[2];
                        document.querySelector(".description").innerHTML = datas[3].replace("~", "");
                        
                        let vk = document.createElement('a').setAttribute("href", datas[4]);
                        
                        let site = document.createElement('a').setAttribute("href", datas[6]);
                        
                        
                        document.querySelector("list a:first-child").setAttribute("href", datas[5]);
                        if (datas[4] != "https://vk.com/"+country) document.querySelector(".info").appendChild(vk);
                        if (datas[6] != "https://example.com") document.querySelector(".info").appendChild(site);
                    });
                }
        });
    });
}

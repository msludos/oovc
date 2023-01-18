window.onload = function() {
    fetch('https://oovc.vercel.app/api/countriesid.php').then((response) => response.json())
        .then((json) => {
            console.log(json.list);
            json.list.forEach(country => {
                if (country == new URLSearchParams(location.search).get("id")) {
                    $.get(`https://oovc.vercel.app/api/country.php?id=${country.id}&fields=name,flag,date,text,vk,author,site`, function(data) {
                        let datas = data.split("~");
                        
                        console.log(datas);
                        
                        document.querySelector(".aside img").setAttribute("src", datas[1]);
                        document.querySelector(".date").innerHTML = datas[2];
                        document.querySelector(".description").innerHTML = datas[3];

                        document.querySelector(".vk").setAttribute("href", datas[4]);
                        document.querySelector(".author").setAttribute("href", datas[5]);
                        document.querySelector(".site").setAttribute("href", datas[6]);
                    });
                }
        });
    });
}

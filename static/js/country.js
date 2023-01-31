function get(selector) {
    return document.querySelector(selector);
}

function goverment(goverment_a, goverment_system, politic) {
    switch (goverment_system) {
        case "Унитарное": goverment_system = "Унитарная"; break;
        case "Федеративное": goverment_system = "Федеративная"; break;
    }
    switch(politic) {
        case "Тоталитарный": politic = "Тоталитарным"; break;
        case "Авторитарный": politic = "Авторитарным"; break;
        case "Демократический": politic = "Демократическим"; break;
    }
    return goverment_system+" "+goverment_a+" с "+politic+" режимом"
}

window.onload = function() {
    $.get(`https://oovc.vercel.app/api/country.php?id=${new URLSearchParams(location.search).get("id")}&fields=name,flag,date,text,vk,site,valute-name,valute-change,form-government,form-government-system,form-politic`, function(data) {
        let datas = data.split("~");
        
        console.log(datas);
        
        get("title").innerText = datas[0];
        
        get(".description h1").innerText = data[0];
        get(".deccription").innerText += data[3];

        get(".about img").setAttribute("src", data[1]);
        get(".about .links .author").setAttribute("href", "https://vk.com/id"+new URLSearchParams(location.search).get("id"));
        get(".about .links .vk").setAttribute("href", data[4]);
        get(".about .links .site").setAttribute("href", data[5]);

        get(".valute .name").innerText += data[6];
        get(".valute .change").innerText += data[7];

        get(".goverment").innerText = goverment(data[8], data[9], data[10]);
    });
}

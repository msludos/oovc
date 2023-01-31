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
        
        get(".description h1").innerText = datas[0];
        get(".description").innerText += datas[3];

        get(".about img").setAttribute("src", datas[1]);
        get(".about .links .author").setAttribute("href", "https://vk.com/id"+new URLSearchParams(location.search).get("id"));
        get(".about .links .vk").setAttribute("href", datas[4]);
        get(".about .links .site").setAttribute("href", datas[5]);

        get(".valute .name").innerText += datas[6];
        get(".valute .change").innerText += datas[7];

        get(".goverment").innerText = goverment(datas[8], datas[9], datas[10]);
    });
}

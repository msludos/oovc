window.onload = function() {
    $.get(`https://oovc.vercel.app/api/country.php?id=${country}&fields=name,flag,date,text,vk,site,valute-name,valute-change,form-government,form-government-system,form-politic,status`, function(data) {
        let datas = data.split("~");
        
        console.log(datas);
        
        document.querySelector("title").innerText = datas[0];
        
        document.querySelector(".aside img").setAttribute("src", datas[1]);
        document.querySelector(".date").innerHTML = datas[2];
        document.querySelector(".description").innerHTML = datas[3].replace("~", "");
        
        document.querySelector("list a:first-child").setAttribute("href", datas[5]);
        if (datas[4] != "https://vk.com/"+country) document.querySelector(".info:nth-child(2)").setAttribute("href", datas[4]);
        if (datas[6] != "https://example.com") document.querySelector(".info:last-child").setAttribute("href", datas[6]);
    });
}

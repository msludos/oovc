const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

window.onload = function() {
    if (urlParams.get("redact") != null) {
        $.get(`https://oovc.vercel.app/api/country.php?id=${urlParams.get("id")}&fields=name,flag,date,text,vk,site,valute-name,valute-change,form-government,form-government-system,form-politic`, function(data) {
            document.querySelector("#name").value = data[0];
            document.querySelector("#flag").value = data[1];
            document.querySelector("#date").value = data[2];
            document.querySelector("#text").value = data[3];
            document.querySelector("#vk").value = data[4];
            document.querySelector("#site").value = data[5];
            document.querySelector("#valute-name").value = data[6];
            document.querySelector("#valute-change").value = data[7];
            document.querySelector("#form-government").value = data[8];
            document.querySelector("#form-government-system").value = data[9];
            document.querySelector("#form-politic").value = data[10];
        });
    }
    document.querySelector("#id").value = urlParams.get("id");
}
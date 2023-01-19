const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

window.onload = function() {
    document.querySelector("#id").value = urlParams.get("id");
    document.querySelector("#submit").addEventListener('click', function(){document.querySelector("#id").removeAttribute("disabled")});
}
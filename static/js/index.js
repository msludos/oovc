window.onload = function() {
    $.get('/api/get.php?count=3', function(data){
        document.querySelector(".news-w").innerHTML = data;
    });
}
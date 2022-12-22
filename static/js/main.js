let menu = `
<div class="menu">
    <div class="logo">
        <img src="/static/imgs/logo.png" alt="logo">
        <b class="text">ООВГ</b>
    </div>
    <div class="items">
        <div class="item"><a href="/">Главная</a></div>
        <div class="item"><a href="/map">Карта</a></div>
        <div class="item"><a href="/news">Новости</a></div>
        <div class="item"><a href="/sections">Разделы</a></div>
        <div class="item"><a href="/faq">FAQ</a></div>
    </div>  
</div>
`;

export function menu() {
    document.querySelector("body").innerHTML = menu + document.querySelector("body").innerHTML;
}
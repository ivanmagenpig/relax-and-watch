console.log("gog");

let itemImg1 = document.querySelector(".itemImg1");
let itemImg2 = document.querySelector(".itemImg2");
let itemImg3 = document.querySelector(".itemImg3");
let itemImg4 = document.querySelector(".itemImg4");

itemImg1.addEventListener('click', function() {
 document.querySelector("video").src = "video/church.mp4";
 document.querySelector(".name").innerHTML ="Neuchâtel, Швейцария"
});
itemImg2.addEventListener('click', function() {
    document.querySelector("video").src = "video/river2.mp4";
    document.querySelector(".name").innerHTML ="Где-то далеко"
   });
itemImg3.addEventListener('click', function() {
    document.querySelector("video").src = "video/birds.mp4";
    document.querySelector(".name").innerHTML ="Птицы?но...."
   });
itemImg4.addEventListener('click', function() {
    document.querySelector("video").src = "video/vetrenna2.mp4";
    document.querySelector(".name").innerHTML ="Ветрянная мельница...больше ничего"
   });  

let t = document.querySelector('head title').innerHTML;
let timer 
function changeTitle(icon, text){
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href', icon);
};
window.onblur = () => {
    timer = setTimeout( () => {
        changeTitle('./favicon/sad.ico','Вернись! Мы скучаем...😭');
    }, 3000 )
};
window.onfocus = () => {
    clearTimeout()
    changeTitle('./favicon/videoicon.ico', t);
};
const nav = document.querySelector(".navbar-toggler");
const item = document.querySelector("#navbarSupportedContent-1");
nav.addEventListener("click",function (){
    item.classList.toggle("show");
})
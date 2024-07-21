const colors = ["red","green","rgba(133,122,200)","#f15025"];
const btn = document.querySelector("#button");
const color = document.querySelector("#color");

btn.addEventListener("click",function (){

    const randomNumber = Math.floor(Math.random()*4);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector("#button");
const colortxt = document.querySelector("#color");

btn.addEventListener("click",function (){
    let color = "#";
    for(let i = 0 ; i <6;i++){
        let randomNumber = colors[Math.floor(Math.random()*16)];
        color += randomNumber;
    }
    document.body.style.backgroundColor = color;
    colortxt.textContent = color;
});
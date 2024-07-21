const btn = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const text = document.querySelector("#count");
let count = 0;

btn.addEventListener("click",function (){
    count = 0;
    if(count == 0){
        text.style.color = "black";
    }
    text.textContent = count;
})

decrease.addEventListener("click",function (){
    count--;
    if(count<0){
        text.style.color = "red";
    }
    text.textContent = count;
})

increase.addEventListener("click",function (){
    count++;
    if(count > 0){
        text.style.color = "green";
    }
    text.textContent = count;
})
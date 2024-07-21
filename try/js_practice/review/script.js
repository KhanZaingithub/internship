const review = [
    {
        id: 1,
        name: "sara",  
    },
    {
        id: 2,
        name: "sara 2",  
    },
    {
        id: 3,
        name: "sara 3",  
    },
    {
        id: 4,
        name: "sara 4",  
    }
]
let count = 0;
const name_1 = document.querySelector("#name");
const pre = document.querySelector("#previous");
const next = document.querySelector("#next");
const suprise = document.querySelector("#suprise"); 

next.addEventListener("click",function (){
    count++;
    console.log(count);
    if(count >= review.length){
        count = 0;
    }
    name_1.textContent = review[count].name;
})

pre.addEventListener("click",function (){
    if(count <= 0){
        count = review.length;
    }
    count--;
    name_1.textContent = review[count].name;
})

suprise.addEventListener("click",function (){
    let randonNumber = Math.floor(Math.random()*review.length)
    name_1.textContent = review[randonNumber].name;
})
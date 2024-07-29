
let count = 0;
const name_1 = document.querySelector("#number");
const text = document.getElementById("name");
let image = document.getElementById("image");
const pre = document.querySelector("#previous");
const next = document.querySelector("#next");
const suprise = document.querySelector("#suprise"); 

async function data(){
    let pro = await fetch('https://fakestoreapi.com/products');
    let response = await pro.text();
    const data = JSON.parse(response);
    console.log(data[0]);

    next.addEventListener("click",function (){
        count++;
        console.log(count);
        if(count >= data.length){
            count = 0;
        }
        image.src = data[count].image;
        name_1.textContent = data[count].id;
        text.innerHTML = data[count].title;
    })

    pre.addEventListener("click",function (){
        if(count <= 0){
            count = data.length;
        }
        count--;
        image.src = data[count].image;
        text.innerHTML = data[count].title;
        name_1.textContent = data[count].id;
    })

    suprise.addEventListener("click",function (){
        let randonNumber = Math.floor(Math.random()*data.length);
        count = randonNumber;
        image.src = data[randonNumber].image;
        text.innerHTML = data[randonNumber].title;
        name_1.textContent = data[randonNumber].id;
    })
}
data();

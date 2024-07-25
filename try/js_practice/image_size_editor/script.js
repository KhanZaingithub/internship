let inputFile = document.querySelector("input");
let image = document.getElementById("image-js");
let para = image.lastElementChild;
let button = image.firstElementChild.nextElementSibling.nextElementSibling;
let image1 = document.getElementById("js-photo");
let height = document.querySelector("#height");
let width = document.querySelector("#width");
let ckeckbox = document.getElementById("flexCheckChecked1");
let reset = document.getElementById("reset");

let orgImageRatio;
let orgheight;
let orgwidth;

const select = (e)=>{
    const photo = e.target.files[0];
    // if(!file){
    //     return;
    // }
    image1.style.display = "block"
    document.body.style.height = "auto"
    button.style.display = "none";
    para.style.display = "none";
    image1.src = URL.createObjectURL(photo);
    image1.addEventListener("load",()=>{
        orgheight = image1.naturalHeight;
        orgwidth = image1.naturalWidth;
        height.value = image1.naturalHeight;
        width.value = image1.naturalWidth;
        orgImageRatio = image1.naturalHeight / image1.naturalWidth;
    })   

}

width.addEventListener("keyup",()=>{
    const width1 = ckeckbox.checked ? width.value/orgImageRatio : height.value;
    height.value = width1;
})
height.addEventListener("keyup",()=>{
    const height1 = ckeckbox.checked ? height.value/orgImageRatio : width.value;
    width.value = height1;
})

reset.addEventListener("click",()=>{
    height.value = orgheight;
    width.value = orgwidth;
})

inputFile.addEventListener("change",select)
image.addEventListener("click",()=> inputFile.click())

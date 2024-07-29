let inputTag = document.getElementById("js-input"); // Targeting input elemt to get their property

let containerTag = document.getElementById("container-img-js"); // Giving input property to conatiner

// p and button to remove
let para = containerTag.lastElementChild;
let button = para.previousElementSibling;

// height and width
let height = document.getElementById("height-js");
let width = document.getElementById("width-js");

// checking value of checkbox
let ckeckBox = document.getElementById("flexCheckChecked1");

// reseting the size
let reset = document.getElementById("reset");

// download and quality
let downloadBtn = document.getElementById("download");
let qualityImage = document.getElementById("flexCheckChecked");


// console.log(qualityImage); 

// height width ratio of image
let orgImageRatioWidth;
let orgImageRatioHeight;
let orgheight;
let orgwidth;

// lower element
let elementJs = document.querySelector(".lower-element");

// Taking property of input (html)
containerTag.addEventListener("click",()=> inputTag.click());


// Create element of img
const imageTag = document.createElement("img");
imageTag.src = "#";
imageTag.classList.add("img-fluid", "rounded", "h-100");
containerTag.append(imageTag);


const select = (e)=>{
    const imageLink = e.target.files[0];

    //remove element present in container
    button.remove();
    para.remove();
  
    imageTag.style.display = "block"

    // link url to image src
    imageTag.src = URL.createObjectURL(imageLink);
    elementJs.style.display = "block";
    imageTag.addEventListener("load",()=>{
        let imgHeight = imageTag.naturalHeight;
        let imgWidth = imageTag.naturalWidth;
        orgheight = imgHeight;
        orgwidth = imgWidth;
        height.value = imgHeight;
        width.value = imgWidth;
        orgImageRatioWidth = (imgWidth / imgHeight);
        orgImageRatioHeight = (imgHeight / imgWidth);
    })   
}


// Taking image if change
containerTag.addEventListener("change",select);

width.addEventListener("keyup",()=>{
    const changeHeight = Math.ceil(ckeckBox.checked ? width.value/orgImageRatioWidth : height.value);
    height.value = changeHeight;
})


height.addEventListener("keyup",()=>{
    const changeWidth = Math.ceil(ckeckBox.checked ? height.value/orgImageRatioHeight : width.value);
    width.value = changeWidth;
})

reset.addEventListener("click",()=>{
    height.value = orgheight;
    width.value = orgwidth;
})


// reSize and download image
const resizeAndDownload = ()=>{
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const check = qualityImage.checked ? 0.7 : 1;
    canvas.height = height.value;
    canvas.width = width.value;
    
    ctx.drawImage(imageTag,0,0,canvas.height,canvas.width);

    var date = new Date();
    const date1 = String(date);
    const Index = date1.indexOf("2024") + 5;
    const current_time = date1.substr(Index,8);
    
    // ctx.imageSmoothingQuality = 'high';
    // console.log(ctx.imageSmoothingQuality);
 
    const link = document.createElement('a');
    link.href = canvas.toDataURL("imagfe/jpg",check);
    link.download = current_time;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    document.body.append(canvas);

}


downloadBtn.addEventListener("click",resizeAndDownload);

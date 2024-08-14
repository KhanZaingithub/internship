let bigImage = document.getElementById("main-image");
let smallImage = document.querySelectorAll(".small-img");
let price = document.getElementById("js-price");
let description = document.getElementById("js-desc");
let title = document.getElementById("js-title");
const urlParams = new URLSearchParams(window.location.search);

bigImage.src = urlParams.get("lat");
price.textContent = urlParams.get("price");
description.textContent = urlParams.get("desc");
title.textContent = urlParams.get("title");

smallImage.forEach((e) => {
  e.addEventListener("click", () => {
    smallImage.forEach((e) => {
      e.classList.remove("active");
    });
    bigImage.src = e.src;
    e.classList.add("active");
  });
});

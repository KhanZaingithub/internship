let product = document.querySelectorAll(".js-product");
// let imageP = product.querySelector(".card img").src;

product.forEach((e) => {
  e.addEventListener("click", () => {
    let tiitle = e.querySelector(".card .card-body .card-title").textContent;
    let details = e
      .querySelector(".card .card-body .card-text")
      .textContent.trim();
    let price = e.querySelector(".card .card-body #price").textContent;
    let imageP = e.querySelector(".card img").src;

    let srcNext = `single-product.html?lat=${imageP}&price=${price}&desc=${details}&title=${tiitle}`;
    window.location.href = srcNext;
  });
});

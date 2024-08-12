async function product_click() {
  let product = document.querySelectorAll(".js-product");
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
}

async function filter() {
  let filter_btn = document.querySelectorAll(".filter .category button");
  let category;
  filter_btn.forEach((element) => {
    element.addEventListener("click", () => {
      category = element.textContent;
      for (let i = 0; i < filter_btn.length; i++) {
        if (filter_btn[i].classList.value.includes("active")) {
          filter_btn[i].classList.remove("active");
        }
      }
      element.classList.add("active");
      products(category);
    });
  });
}

async function products(category) {
  let a = await fetch("cara/products/info.json");
  let response = await a.text();
  const data = JSON.parse(response);
  let product = document.querySelector("#products .row");
  product.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (category.toLowerCase() == data[i].category.toLowerCase()) {
      product.innerHTML =
        product.innerHTML +
        `<div class="col-12 col-lg-3 col-md-4 js-product">
          <div class="card">
            <img src="${data[i].image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text">
                ${data[i].description}
              </p>
              <a href="#" class="btn btn-primary"
                ><i class="bi bi-cart-plus"></i
              ></a>
              <h4 id="price">${data[i].rate}</h4>
            </div>
          </div>
        </div>`;
    } else if (category.toLowerCase() == "all products") {
      product.innerHTML =
        product.innerHTML +
        `<div class="col-12 col-lg-3 col-md-4 js-product">
          <div class="card">
            <img src="${data[i].image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text">
                ${data[i].description}
              </p>
              <a href="#" class="btn btn-primary"
                ><i class="bi bi-cart-plus"></i
              ></a>
              <h4 id="price">${data[i].rate}</h4>
            </div>
          </div>
        </div>`;
    } else if (category.toLowerCase() == data[i].type.toLowerCase()) {
      product.innerHTML =
        product.innerHTML +
        `<div class="col-12 col-lg-3 col-md-4 js-product">
          <div class="card">
            <img src="${data[i].image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text">
                ${data[i].description}
              </p>
              <a href="#" class="btn btn-primary"
                ><i class="bi bi-cart-plus"></i
              ></a>
              <h4 id="price">${data[i].rate}</h4>
            </div>
          </div>
        </div>`;
    }
  }
  product_click();
}

async function search() {
  let input = document.querySelector(".filter form input");
  let submit = document.querySelector(".filter form .js-submit");
  let no_data = document.querySelector("#products .no-data");
  let btn = document.querySelector(".buttons");
  submit.addEventListener("click", async (e) => {
    e.preventDefault();
    let a = await fetch("cara/products/info.json");
    let response = await a.text();
    const data = JSON.parse(response);
    let product = document.querySelector("#products .row");
    product.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].title.toLowerCase().includes(input.value) ||
        data[i].description.toLowerCase().includes(input.value)
      ) {
        console.log("y");
        no_data.style.display = "none";
        btn.style.display = "block";
        product.innerHTML =
          product.innerHTML +
          `<div class="col-12 col-lg-3 col-md-4 js-product">
            <div class="card">
              <img src="${data[i].image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">
                  ${data[i].description}
                </p>
                <a href="#" class="btn btn-primary"
                  ><i class="bi bi-cart-plus"></i
                ></a>
                <h4 id="price">${data[i].rate}</h4>
              </div>
            </div>
          </div>`;
      } else {
        console.log("n");
        no_data.style.cssText = "display: flex; justify-content: center;";
        btn.style.display = "none";
      }
    }
  });
  product_click();
}

search();

filter();
products("all products");

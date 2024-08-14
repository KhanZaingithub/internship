async function products() {
  let a = await fetch("cara/products/info.json");
  let response = await a.text();
  const data = JSON.parse(response);
  let product = document.querySelector("#products .row");
  for (let i = 0; i < data.length / 2; i++) {
    product.innerHTML =
      product.innerHTML +
      `<div class="col-12 col-lg-3 col-md-4">
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

  let product_1 = document.querySelector("#products-1 .row");
  for (let i = data.length / 2; i < data.length; i++) {
    product_1.innerHTML =
      product_1.innerHTML +
      `<div class="col-12 col-lg-3 col-md-4">
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
products();

async function loginCeck() {
  let a = await fetch("cara/login/login.json");
  let response = await a.text();
  const data = JSON.parse(response);
  let loginDiv = document.querySelector(".navbar .login");
  let profileDiv = document.querySelector(".navbar .profile");
  let profileName = document.getElementById("profile-name");
  let index = localStorage.getItem("index");

  if (index != null) {
    loginDiv.style.display = "none";
    profileDiv.style.display = "flex";
    profileName.textContent = data[index].name;
  } else {
    loginDiv.style.display = "block";
    profileDiv.style.display = "none";
  }
  Logout();
}

function Logout() {
  let btn = document.getElementById("logout");
  btn.addEventListener("click", (event) => {
    localStorage.removeItem("index");
  });
}

loginCeck();

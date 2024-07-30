let count = 0;
const name_1 = document.querySelector("#number");
const text = document.getElementById("name");
const pre = document.querySelector("#previous");
const next = document.querySelector("#next");
const suprise = document.querySelector("#suprise");
const showProduct = document.getElementById("show");
const addProduct = document.getElementById("products");

function edit(name) {
  console.log(name);
}

async function data() {
  let pro = await fetch("https://fakestoreapi.com/products");
  let response = await pro.text();
  const data = JSON.parse(response);
  let count = 1;

  next.addEventListener("click", function () {
    count++;

    if (count >= data.length) {
      count = 0;
    }
    image.src = data[count].image;
    name_1.textContent = data[count].id;
    text.innerHTML = data[count].title;
  });

  pre.addEventListener("click", function () {
    if (count <= 0) {
      count = data.length;
    }
    count--;
    image.src = data[count].image;
    text.innerHTML = data[count].title;
    name_1.textContent = data[count].id;
  });

  suprise.addEventListener("click", function () {
    let randonNumber = Math.floor(Math.random() * data.length);
    count = randonNumber;
    image.src = data[randonNumber].image;
    text.innerHTML = data[randonNumber].title;
    name_1.textContent = data[randonNumber].id;
  });

  showProduct.addEventListener("click", () => {
    if (count == data.length) {
      showProduct.disabled = true;
      return;
    }
    for (let i = 1; i < data.length; i++) {
      arr = data.title;
      let titlenmae = data[i].title;
      let titleNmae = titlenmae.replace(/['"]+/, "");
      const col = document.createElement("div");
      col.classList.add("col", "products");
      col.innerHTML = ` 
                <div class="card" style="width: 18rem">
                    <div class="image">
                    <img
                        id="image"
                        src="${data[i].image}"
                        class="card-img-top"
                        alt="..."
                    />
                    </div>

                    <div class="card-body">
                    <p id="number">${data[i].id}</p>
                    <p id="name" class="card-text">
                        ${titleNmae}
                    </p>
                    </div>
                    <div class="buttons">
                        <button type="button" onclick='edit("${titleNmae}")' id="edit" class="btn btn-primary">
                            Edit
                        </button>
                        <button type="button" id="delete" class="btn btn-primary">
                            Delete
                        </button>
                    </div>
                    <button type="button" id="suprise" class="btn btn-primary">
                    suprise me
                    </button>
                </div>
                
                `;

      addProduct.append(col);
      count++;
    }

    const cardMargin = document.querySelectorAll(".card");
    cardMargin.forEach((e) => {
      e.style.margin = "0px";
    });
  });
}

data();
async function search() {
  let pro = await fetch("https://fakestoreapi.com/products");
  let response = await pro.text();
  const data = JSON.parse(response);
  let input = document.getElementById("search");
  let filter = input.value.toLowerCase();
  let products = document.querySelectorAll(".products");
  for (i = 0; i < data.length; i++) {
    if (data[i].title.toLowerCase().includes(filter)) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }
}

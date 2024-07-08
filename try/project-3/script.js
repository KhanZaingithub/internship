// select nav items
const btn = document.querySelectorAll(".nav-link");
btn.forEach((element) => {
  element.addEventListener("click", () => {
    for (let i = 0; i < btn.length; i++) {
      if (btn[i].classList.value.includes("active")) {
        btn[i].classList.remove("active");
      }
    }
    element.classList.add("active");
  });
});
const search = document.querySelector(".form");
const cart = document.querySelector(".cart");
const login = document.querySelector(".login");
// search bar toggle
$("#search").click(function () {
  if (cart.classList.value.includes("transform-1-active")) {
    cart.classList.remove("transform-1-active");
  } else if (login.classList.value.includes("transform-2-active")) {
    login.classList.remove("transform-2-active");
  }
  $(".form").toggleClass("transform-active");
});

// cart bar toggle
$("#cart").click(function () {
//   if (search.classList.value.includes("transform-active")) {
//     search.classList.remove("transform-active");
//   } else if (login.classList.value.includes("transform-2-active")) {
//     login.classList.remove("transform-2-active");
//   }
  search.classList.remove("transform-active");
  login.classList.remove("transform-2-active");
  $(".cart").toggleClass("transform-1-active");
});

// profile bar toggle
$("#login").click(function () {
  if (search.classList.value.includes("transform-active")) {
    search.classList.remove("transform-active");
  } else if (cart.classList.value.includes("transform-1-active")) {
    cart.classList.remove("transform-1-active");
  }
  $(".login").toggleClass("transform-2-active");
});

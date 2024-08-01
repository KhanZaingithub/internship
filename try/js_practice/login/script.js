let signup = document.getElementById("signup");
let Name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmpass = document.getElementById("checkpassword");
let form = document.getElementById("form");
let form_login = document.getElementById("form-login");

let login_container = document.getElementById("login-container");

let p = document.createElement("P");
p.innerText = "password doest not match";

let login_email = document.getElementById("login-email");
let login_password = document.getElementById("login-password");
let login_btn = document.getElementById("login-js");

function refresh(e) {
  e.preventDefault();
}
signup.addEventListener("click", (event) => {
  if (Name.value == "") {
    return;
  }
  if (password.value !== confirmpass.value) {
    refresh(event);
    login_container.style.height = "550px";
    form.insertBefore(p, signup);
    return;
  } else {
    login_container.style.height = "500px";
    p.remove();
    localStorage.setItem("name", Name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("confirmpassword", confirmpass.value);
  }
});

let p1 = document.createElement("p");
p1.innerHTML = "email and password not match";
login_btn.addEventListener("click", (event) => {
  //refresh(event);
  if (
    login_email.value === localStorage.getItem("email") &&
    login_password.value === localStorage.getItem("password")
  ) {
    p1.remove();
    //alert("login successful");
  } else {
    refresh(event);
    form_login.insertBefore(p, login_btn);
  }
});
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("password"));
console.log(localStorage.getItem("confirmpassword"));

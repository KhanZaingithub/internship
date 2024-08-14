async function login() {
  let a = await fetch("cara/login/login.json");
  let response = await a.text();
  const data = JSON.parse(response);
  let email = document.querySelector("form .email");
  let password = document.querySelector("form .password");
  let not_valid = document.querySelector(".incorrect");
  let form = document.querySelector("form");
  let index;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    for (let i = 0; i < data.length; i++) {
      if (data[i].email != email.value || data[i].password != password.value) {
        not_valid.style.display = "block";
        return;
      } else if (
        data[i].email == email.value &&
        data[i].password == password.value
      ) {
        index = i;
        not_valid.style.display = "none";
        localStorage.setItem("index", index);
        window.location.href = `index.html`;
        return;
      }
    }
  });
}
login();

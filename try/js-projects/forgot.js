let email = document.querySelector(".form .email");
let otp = document.querySelector(".form .OTP");
let password = document.querySelector(".form .password");
let confirm_password = document.querySelector(".form .confirm-password");
let form = document.getElementById("form");
let btn = document.getElementById("js-btn");
let generateotp = 20;
let emailText = document.getElementById("invalid-email");
let otpText = document.getElementById("invalid-otp");
let passText = document.getElementById("invalid-password");
otp.style.display = "none";
password.style.display = "none";
confirm_password.style.display = "none";
let count = true;

function emailsend(email) {
  let params = {
    name: "Cara",
    otp: generateotp,
    email_id: email,
  };
  emailjs
    .send("service_9k2h0ak", "template_r4hy9xe", params)
    .then(alert("hello"));
}

async function forgotPassword() {
  let a = await fetch("cara/login/login.json");
  let response = await a.text();
  const data = JSON.parse(response);
  form.addEventListener("submit", function (event) {
    for (let i = 0; i < data.length; i++) {
      if (email.lastElementChild.value != data[i].email) {
        event.preventDefault();
        emailText.style.display = "block";
        console.log("not");
      } else if (email.lastElementChild.value == data[i].email) {
        event.preventDefault();
        if (count) {
          emailsend(data[i].email);
          count = false;
        }
        btn.innerText = "Check OTP";
        emailText.style.display = "none";
        email.lastElementChild.required = false;
        email.style.display = "none";
        otp.style.display = "block";
        otp.lastElementChild.required = true;
        if (otp.lastElementChild.value == generateotp) {
          otpText.style.display = "none";
          otp.lastElementChild.required = false;
          otp.style.display = "none";
          password.lastElementChild.required = true;
          confirm_password.lastElementChild.required = true;
          password.style.display = "block";
          confirm_password.style.display = "block";
          btn.innerText = "Change password";
          if (
            password.lastElementChild.value ===
              confirm_password.lastElementChild.value &&
            password.lastElementChild.value != ""
          ) {
            window.location = "login.html";
          } else if (password.lastElementChild.value != "") {
            passText.style.display = "block";
          }
        } else if (otp.lastElementChild.value != "") {
          otpText.style.display = "block";
        }
      }
    }
  });
}
forgotPassword();

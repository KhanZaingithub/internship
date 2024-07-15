const nam = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const confirm_pass = document.getElementById("confirm");
var form = document.getElementById("myForm");
function handleForm(event) { 
    event.preventDefault();
    ValidateName(nam);
    ValidateEmail(email);
    ValidatePassword(pass,confirm_pass);
   
 } 
function ValidateEmail(input) {
    var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (input.value.match(validRegex)) {
        document.querySelector(".email_validate").style.display = "none";
        return true;
    } else {
        document.querySelector(".email_validate").style.display = "block";
        return false;
    }
}
function ValidateName(input) {
    var validRegex = /^[A-Za-z\s]$/;
  
    if (input.value.match(validRegex)) {
        document.querySelector(".name_validate").style.display = "none";
       
        return true;
    } else {
        document.querySelector(".name_validate").style.display = "none";
        return false;
    }
}
function ValidatePassword(input,input1) {
    if (input.value === input.value1) {
        document.querySelector(".pass_validate").style.display = "none";
        return true;
    } else {
        document.querySelector(".pass_validate").style.display = "block";
        return false;
    }
}
form.addEventListener('submit', handleForm);

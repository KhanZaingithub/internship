//  container width calculate
const container = document.querySelector(".container");
let slider = document.getElementById("slider-js");
let slides = document.querySelectorAll("#slider-js .col-12").length;

let btn_pre = document.getElementById("previous");
let btn_next = document.getElementById("next");

console.log(btn_next);

let currentPosition = 0;
let currentMargin = 0.0;
let slidesPerPage = 0;

var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
// var prevKeyActive = false;
// var nextKeyActive = true;

// for mobile width
var x = window.matchMedia("(max-width: 700px)");

window.addEventListener("resize", setParams(containerWidth));

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else if (w < 901) {
    slidesPerPage = 2;
  } else if (w < 959) {
    slidesPerPage = 3;
  } else {
    slidesPerPage = 4;
  }
  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
    console.log("h");
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = ` ${currentMargin}%`;
  if (currentPosition > 0) {
    btn_pre.style.disabled = true;
  }
  if (currentPosition < slidesCount) {
    btn_next.style.disabled = false;
  }
  if (currentPosition >= slidesCount) {
    btn_next.style.disabled = true;
  }
}

// automatic slider
let position = currentPosition;
setInterval(function () {
  console.log(position);
  if (position >= 0) {
    switch (position) {
      case 0:
        slideLeft();
        position++;
        break;
      case 1:
        slideLeft();
        position++;
        break;
      case 2:
        slideLeft();
        position++;
        break;
      case 3:
        slideLeft();
        position++;
        break;
      case 4:
        slideLeft();
        position++;
        break;
      case 5:
        slideLeft();
        position = -1;
        break;
      default:
        console.log("h");
    }
  } else {
    switch (position) {
      case -1:
        slideRight();
        position -= 1;
        break;
      case -2:
        slideRight();
        position -= 1;
        break;
      case -3:
        slideRight();
        position -= 1;
        break;
      case -4:
        slideRight();
        position -= 1;
        break;
      case -5:
        slideRight();
        position -= 1;
        break;
      case -6:
        slideRight();
        position = 0;
        break;
      default:
        console.log("v");
    }
  }
}, 3000);

function slideRight() {
  if (x.matches) {
    if (currentPosition != 0) {
      slider.style.marginLeft = currentMargin + 96 / slidesPerPage + "%";
      currentMargin += 96 / slidesPerPage;

      currentPosition--;
    }
    if (currentPosition === 0) {
      btn_pre.style.disabled = true;
    }
    if (currentPosition < slidesCount) {
      btn_next.style.disabled = false;
    }
  } else {
    if (currentPosition != 0) {
      slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
      currentMargin += 100 / slidesPerPage;

      currentPosition--;
    }
    if (currentPosition === 0) {
      btn_pre.style.disabled = true;
    }
    if (currentPosition < slidesCount) {
      btn_next.style.disabled = false;
    }
  }
}

function slideLeft() {
  if (x.matches) {
    if (currentPosition != slidesCount) {
      slider.style.marginLeft = currentMargin - 96 / slidesPerPage + "%";
      currentMargin -= 96 / slidesPerPage;
      currentPosition++;
    }
    if (currentPosition == slidesCount) {
      btn_next.style.disabled = true;
    }
    if (currentPosition > 0) {
      btn_pre.style.disabled = false;
    }
  } else {
    if (currentPosition != slidesCount) {
      slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
      currentMargin -= 100 / slidesPerPage;
      currentPosition++;
    }
    if (currentPosition == slidesCount) {
      btn_next.style.disabled = true;
    }
    if (currentPosition > 0) {
      btn_pre.style.disabled = false;
    }
  }
}

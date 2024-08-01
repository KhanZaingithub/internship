// const countdown = new Date();
let data = document.getElementById("heading");
let btn = document.getElementsByTagName("button");
// let user_count = prompt("Enter time in hours you want");
// console.log(user_count);

let countdown = new Date(Date.parse(new Date()) + 1 * 1 * 60 * 60 * 1000);
let timeinterval;

const days = document.querySelector(".days").querySelector(".flip-card");
const hours = document.querySelector(".hours").querySelector(".flip-card");
const minutes = document.querySelector(".minutes").querySelector(".flip-card");
const seconds = document.querySelector(".seconds").querySelector(".flip-card");

btn[0].addEventListener("click", () => {
  let user_count = prompt("Enter time in hours you want");
  if (user_count === null) {
    return;
  } else {
    clearInterval(timeinterval);
  }
  console.log(user_count);
  data.textContent = `${user_count} Hour Timer`;
  countdown = new Date(
    Date.parse(new Date()) + 1 * user_count * 60 * 60 * 1000
  );

  initializeClock(countdown);
});

// ** get the time totals, return them
function getTimeRemaining(countdown) {
  const now = new Date();
  const diff = countdown - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    diff,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(countdown) {
  function updateClock() {
    const t = getTimeRemaining(countdown);
    addFlip(days, t.days);
    addFlip(hours, t.hours);
    addFlip(minutes, t.minutes);
    addFlip(seconds, t.seconds);

    if (t.diff <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  timeinterval = setInterval(updateClock, 1000);
}

const addFlip = (card, time) => {
  // ** confirm time has changed
  const currTime = card.querySelector(".top-half").innerText;
  if (time == currTime) return;

  let t = time <= 9 ? `0${time}` : time;
  const topHalf = card.querySelector(".top-half");
  const bottomHalf = card.querySelector(".bottom-half");
  const topFlip = document.createElement("div");
  const bottomFlip = document.createElement("div");

  // ** add animation, populate with current time
  topFlip.classList.add("top-flip");
  topFlip.innerText = currTime;

  bottomFlip.classList.add("bottom-flip");

  // ** animation begins, update top-half to new time
  topFlip.addEventListener("animationstart", () => {
    topHalf.innerText = t;
  });

  // ** animation ends, remove animated div, update bottom animation to new time
  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
    bottomFlip.innerText = t;
  });

  // ** animation ends, update bottom-half to new time, remove animated div
  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.innerText = t;
    bottomFlip.remove();
  });

  card.appendChild(topFlip);
  card.appendChild(bottomFlip);
};

initializeClock(countdown);

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

// text slider
var isLast = function(word) {
  return $(word).next().length > 0 ? false : true;
}

var getNext = function(word) {
  return $(word).next();
}

var getVisible = function () {
  return document.getElementsByClassName('is-visible');
}

var getFirst =  function() {
  var node = $('.words-wrapper').children().first();
  return node;
}

var switchWords = function(current, next) {
  $(current).removeClass('is-visible').addClass('is-hidden');
  $(next).removeClass('is-hidden').addClass('is-visible');
}

var getStarted = function() {
  //We start by getting the visible element and its sibling
  var first = getVisible();
  var next = getNext(first);
  
  //If our element has a sibling, it's not the last of the list. We switch the classes
  if (next.length !== 0) {
     switchWords(first,next);
  } else {
    
    //The element is the last of the list. We remove the visible class of the current element
    $(first).removeClass('is-visible').addClass('is-hidden');
    
    //And we get the first element of the list, and we give it the visible class. And it starts again.
    var newEl = getFirst();
    $(newEl).removeClass('is-hidden').addClass('is-visible');
  }
  
}

var init = function() {
  setInterval(function() {getStarted()}, 2000);
}

init();

// word-wrap
class readMore {
  constructor() {
      this.content = '.readmore__content';
      this.buttonToggle = '.readmore__toggle';
  }

  bootstrap() {
      this.setNodes();
      this.init();
      this.addEventListeners();
  }

  setNodes() {
      this.nodes = {
          contentToggle: document.querySelector(this.content)
      };

      this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(this.buttonToggle);
  }

  init() {
      const { contentToggle } = this.nodes;

      this.stateContent = contentToggle.innerHTML;

      contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`;
  }

  addEventListeners() {
      this.buttonToggle.addEventListener('click', this.onClick.bind(this))
  }

  onClick(event) {
      const targetEvent = event.currentTarget;
      const { contentToggle } = this.nodes

      if (targetEvent.getAttribute('aria-checked') === 'true') {
          targetEvent.setAttribute('aria-checked', 'false')
          contentToggle.innerHTML = this.stateContent;
          this.buttonToggle.innerHTML = 'Show less'

      } else {
          targetEvent.setAttribute('aria-checked', 'true')
          contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`
          this.buttonToggle.innerHTML = 'Show more'
      }
  }
}


const initReadMore = new readMore();
initReadMore.bootstrap()

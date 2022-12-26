const slides = document.querySelectorAll(".container");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

let current = 0;

prevBtn.onclick = function () {
  // remove the previuse class
  slides[current].classList.remove("active");
  slides[current].classList.remove("slide-in-from-right");
  slides[current].classList.remove("slide-in-from-left");

  //   decress the vlaue of current to select the next slide
  current--;

  //   check for the value of current if it's smaller than 0 if so then set the current to the last element in the array of slides
  if (current < 0) {
    current = slides.length - 1;
  }

  //   add the class of active and the class of animation to the current element inside the array of slides
  slides[current].classList.add("active");
  slides[current].classList.add("slide-in-from-left");
};

nextBtn.onclick = function () {
  slides[current].classList.remove("active");
  slides[current].classList.remove("slide-in-from-right");
  slides[current].classList.remove("slide-in-from-left");
  current++;

  if (current >= slides.length) {
    current = 0;
  }

  slides[current].classList.add("active");
  slides[current].classList.add("slide-in-from-right");
};

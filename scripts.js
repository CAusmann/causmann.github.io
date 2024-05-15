// Script 1: Loader functionality
document.addEventListener("DOMContentLoaded", function () {
  var loaderWrapper = document.querySelector(".loader-wrapper");

  window.addEventListener("load", function () {
    fadeOutLoader(loaderWrapper);
    createInfiniteLoop();
  });

  setTimeout(function () {
    fadeOutLoader(loaderWrapper);
  }, 3000);
});

function fadeOutLoader(loaderWrapper) {
  loaderWrapper.classList.add("fade-out");

  setTimeout(function () {
    loaderWrapper.style.display = "none";
  }, 500);
}

// Script 2: Scroll functionality
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
    document.getElementById("drop").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
    document.getElementById("drop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Function to duplicate carousel content
function duplicateContent(carousel) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('skills-carousel-wrapper');
  wrapper.innerHTML = carousel.innerHTML + carousel.innerHTML;
  carousel.innerHTML = '';
  carousel.appendChild(wrapper);
}

// Function to create an infinite loop for the carousels
function createInfiniteLoop() {
  const logosCarousel = document.querySelector('.skills-carousel.logos');
  const textsCarousel = document.querySelector('.skills-carousel.texts');

  duplicateContent(logosCarousel);
  duplicateContent(textsCarousel);
}

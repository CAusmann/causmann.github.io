// Script 1: Loader functionality
document.addEventListener("DOMContentLoaded", function () {
  var loaderWrapper = document.querySelector(".loader-wrapper");

  window.addEventListener("load", function () {
    fadeOutLoader(loaderWrapper);
    // Moved the call to createInfiniteLoop() inside the load event
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











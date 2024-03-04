document.addEventListener("DOMContentLoaded", function () {
  // Initialize the loader
  var loaderWrapper = document.querySelector(".loader-wrapper");

  // Check if all content (including images, stylesheets, etc.) is loaded
  window.addEventListener("load", function () {
    // Hide the loader after everything is loaded
    fadeOutLoader(loaderWrapper);
  });

  // Simulate a delay for demonstration purposes (adjust as needed)
  setTimeout(function () {
    // Hide the loader after the delay, even if not all content is loaded
    fadeOutLoader(loaderWrapper);
  }, 3000); // 3000 milliseconds (3 seconds) delay, adjust as needed
});

function fadeOutLoader(loaderWrapper) {
  // Add the "fade-out" class to trigger the opacity transition
  loaderWrapper.classList.add("fade-out");

  // After the animation duration, hide the loader
  setTimeout(function () {
    loaderWrapper.style.display = "none";
  }, 500); // Adjust the time to match your CSS animation duration
}




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  }else {
    document.getElementById("topBtn").style.display = "none";
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("drop").style.display = "block";
  } else {
    document.getElementById("drop").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



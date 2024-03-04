document.addEventListener("DOMContentLoaded", function () {
  var loaderWrapper = document.querySelector(".loader-wrapper");

  window.addEventListener("load", function () {
    fadeOutLoader(loaderWrapper);
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



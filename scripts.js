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


document.getElementById('contact-left').addEventListener('submit', function (event) {
  var response = hCaptcha.getResponse();
  if (!response) {
    event.preventDefault();
    alert('Please complete the hCaptcha challenge.');
  }
});

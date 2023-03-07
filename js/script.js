// Set the date we're counting down to
var countDownDate = new Date("Sep 9, 2023 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The wedding was frickin great! :) ";
  }
}, 1000);

//Adjust the navbar backround from transparent (scrolled to top) to black (scrolled down)
window.addEventListener('scroll', function navbar_background(){
  var classes = document.querySelector("#navbar").className;
  const scroll = window.scrollY;  
  
  if (scroll == 0) {
    if (classes.indexOf("navbar-style-init") == -1){
      classes = classes.replace(new RegExp("navbar-style-scroll", "g"), "navbar-style-init");
      document.querySelector("#navbar").className = classes;
    }
  }
  else {
    if (classes.indexOf("navbar-style-scroll") == -1){
      classes = classes.replace(new RegExp("navbar-style-init", "g"), "navbar-style-scroll");
      document.querySelector("#navbar").className = classes;
    }
  };
});

// On page load (before images or css)
document.addEventListener("DOMContentLoaded", function (event) {
 
});

(function (global) {

  var fn = {};

  // Convinienve function for inserting innerHtmL for 'select'
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'
var showLoading = function(selector) {
    var html = "<div class='text-center'>";
    html += "<img src='pictures/ajax-loader.gif'></div>";
    insertHtml(selector, html);
}

global.fn = fn;

})(window);
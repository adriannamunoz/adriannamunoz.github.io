// To top button
mybutton = document.getElementById("myBtn");

// When scrolled down 20px from top, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
 } else {
     mybutton.style.display = "none";
   }
 }

 // When clicked, scroll to top of document
 mybutton.addEventListener("click", backToTop);

 function backToTop() {
    document.body.scollTop = 0;
    document.documentElement.scrollTop = 0;
 }
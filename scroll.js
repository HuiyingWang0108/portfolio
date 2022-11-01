// window.addEventListener("scroll", function() {
//     var header = document.querySelector("header");
//     // console.log(window.scrollY);
//     header.classList.toggle("sticky",window.scrollY > 0);
// });
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
console.log(sticky);

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
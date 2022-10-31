window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
    
    var section = document.querySelector("section");
    section.classList.toggle("active");
}

const toggle = document.getElementById("toggleBtn");
console.log("toggle: "+ toggle);

const theme = window.localStorage.getItem("theme");
console.log("theme: "+theme);
if (theme === "darkmode") document.body.classList.add("darkmode");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    if (theme === "darkmode") {
      window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "darkmode");
  });


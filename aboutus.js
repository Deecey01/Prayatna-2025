// hamburger = document.querySelector('.hamburger');
// navbar = document.querySelector('.navbar');
// navbar_right = document.querySelector('.navbar-right');

// hamburger.addEventListner('click',()=>{
//          navbar.classList.toggle('h-nav-resp');
//          navbar_right.classList.toggle('display_resp');
//          hamburger.classList.toggle('display_resp');
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
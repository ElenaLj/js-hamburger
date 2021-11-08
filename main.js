//dichiarazione variabili
const openMenu = document.querySelector('.fa-bars');
const hamburgerMenu = document.querySelector(".hamburger-menu");

//apertura menu
openMenu.addEventListener("click", function(){
    hamburgerMenu.classList.add("active");
});

//chiusura menu
const closeMenu = document.querySelector('.fa-times');

closeMenu.addEventListener("click", function(){
    hamburgerMenu.classList.remove("active");
});
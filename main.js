//dichiarazione variabili
const menu = document.querySelector('.fa-bars');
const hamburgerMenu = document.querySelector(".hamburger-menu");

//apertura menu
menu.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("active");
});

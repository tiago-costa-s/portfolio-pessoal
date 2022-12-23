const menuBTN = document.querySelector("#menu");
const closeMenuBTN = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

[menuBTN, closeMenuBTN].forEach((btn) => {

    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active");
        console.log("OLA");
    });

    console.log("OLA");
}); 



let numero = "152818844$ttata";

console.log(typeof numero);
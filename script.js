
// Esconder NavBar
function esconderMenu(){

   let cabeca = document.getElementById("top_header");
    cabeca.setAttribute = "display = none";
}

// Alterar fundo da NavBar ao realizar o Scroll

var cabeca = document.getElementById("top_header");
var queryHeader = document.querySelector('#top_header');

window.addEventListener("scroll", function(){
    var header = document.querySelector("header"); 
    header.classList.toggle("top_header", window.scrollY > 0);
})
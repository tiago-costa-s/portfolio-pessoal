
// Esconder NavBar
function esconderMenu() {

    let cabeca = document.getElementById("header");
    cabeca.setAttribute = "display = none";

    // cabeca.style.backgroundColor="red";
}

// Alterar fundo da NavBar ao realizar o Scroll



// CAPTURAR DADOS DO FORMULARIO DE CONTATO
const enviar = document.querySelector("#btn");

enviar.addEventListener("click", function (e) {

    // e.preventDefault();

    const nomeValor = nome.value;
    const telefoneValor = telefone.value;
    const descricaoValor = descricao.value;

    const novoContato = { nomeValor, telefoneValor, descricaoValor }
  

});


function alertaLogin() {

    try {
        console.log("");
    } catch (error) {

    }
}

// Exibi opções do menu ao clicar no burgerMenu
const burgerMenu = document.getElementById("burger_menu");

function toggleMenu(){
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

burgerMenu.addEventListener("click", toggleMenu);
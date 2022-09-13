
// Esconder NavBar
function esconderMenu() {

    let cabeca = document.getElementById("top_header");
    cabeca.setAttribute = "display = none";
}

// Alterar fundo da NavBar ao realizar o Scroll

var cabeca = document.getElementById("top_header");
var queryHeader = document.querySelector('#top_header');

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("top_header", window.scrollY > 0);
    
});



// CAPTURAR DADOS DO FORMULARIO DE CONTATO



const enviar = document.querySelector("#btn");

enviar.addEventListener("click", function (e) {

    // e.preventDefault();

    const nomeValor = nome.value;
    const telefoneValor = telefone.value;
    const descricaoValor = descricao.value;

    const novoContato = { nomeValor, telefoneValor, descricaoValor }

    console.log(nomeValor, telefoneValor, descricaoValor);
    console.log(novoContato);

});


function alertaLogin() {

    try {
        console.log("");
    } catch (error) {

    }
}



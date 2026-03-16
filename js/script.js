document
.getElementById("formDenuncia")
.addEventListener("submit",(e)=>{

e.preventDefault()

const denuncia = {

    nome: document.getElementById("nome").value,
    email: document.querySelector('input[type="email"]').value,
    telefone: document.querySelector('input[type="tel"]').value,
    tipo: document.querySelector('select').value,
    estado: document.getElementById("estado").value,
    cidade: document.getElementById("cidade").value,
    local: document.querySelector('input[placeholder^="Local"]').value,
    descricao: document.querySelector("textarea").value,
    data: new Date().toLocaleString()

}

// pegar denúncias salvas
let denuncias = JSON.parse(localStorage.getItem("denuncias")) || []

// adicionar nova
denuncias.push(denuncia)

// salvar
localStorage.setItem("denuncias", JSON.stringify(denuncias))

alert("Denúncia enviada com sucesso!")

document.getElementById("formDenuncia").reset()

})

//-------------------- MENU TOGGLE --------------------
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

//-------------------- LOGIN --------------------
function login(event) {
    event.preventDefault(); 

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {
        window.location.href = "dashboard.html";
    } else {
        alert("Usuário ou senha incorretos");
    }
}


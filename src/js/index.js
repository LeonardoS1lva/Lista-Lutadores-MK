const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");
const imagemFundo = document.querySelector(".imagem-fundo");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");   //adiciona ou remove a classe no body.

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/light-logo-button.png");
        imagemFundo.style.backgroundImage = "url(/src/imagens/the-courtyard-arena.png)";
    } else {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/dark-logo-button.png");
        imagemFundo.style.backgroundImage = "url(/src/imagens/background-bridge.png)";
    }
});
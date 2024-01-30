let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

exibirTexto('h1', 'Jogo do Numero Secreto!');
exibirTexto('p', 'Escolha um numero entre 1 e 10.');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute === numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

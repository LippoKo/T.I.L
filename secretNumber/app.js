let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do Numero Secreto!');
    exibirTexto('p', 'Escolha um numero entre 1 e 10.');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
    let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!!!');
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O numero secreto e menor!');
        } else {
            exibirTexto('p', 'O numero secreto e maior!');
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

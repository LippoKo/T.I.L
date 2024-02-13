let listaDeNumerosSorteados = [];
let quantidadeMaxima = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', { rate: 1.2 });
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
    let numeroEscolhido = parseInt(Math.random() * quantidadeMaxima + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosNaLista == quantidadeMaxima) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
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

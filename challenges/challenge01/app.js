let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function buttonClick() {
    console.log('O botao foi clicado!');
}

function alertClick() {
    alert('Eu amo JS!');
}

function promptClick() {
    let city = prompt('Me indique uma cidade que voce mais gosta?');

    let cityAnswer = city === '' ? 'Lindas cidades' : city;

    alert(`Estive em ${cityAnswer} e lembrei de voce!`);
}

function sumClick() {
    let num1 = parseInt(prompt('Escolha um numero:'));
    let num2 = parseInt(prompt('Escolha outro numero:'));

    let sum = num1 + num2;

    alert(`A soma dos numeros e: ${sum}`);
}

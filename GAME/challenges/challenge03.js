function calculateBMI(height, weight) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}

let myBMI = calculateBMI(1.92, 84);
console.log(myBMI);

function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}
console.log(calculateFactorial(5));

function dolarConvert(dolars) {
    let cotaçao = 4.8;
    let convert = dolars * cotaçao;
    return convert;
}
console.log(dolarConvert(5));

function calcularPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`Area: ${area}, Perimetro: ${perimetro}`);
}
calcularPerimetro(4, 3);

function calculateCircle(radius) {
    const PI = 3.14;

    let area = PI * radius * radius;

    let perimeter = 2 * PI * radius;

    console.log(`Area: ${area}, Perimeter: ${perimeter}`);
}

calculateCircle(8);

function displayMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(number + 'x' + i + ' = ' + result);
    }
}

displayMultiplicationTable(9);

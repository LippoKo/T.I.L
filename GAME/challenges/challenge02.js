function helloWorld() {
    console.log('Hello World!');
}
helloWorld();

function greetings(name) {
    console.log(`Ola ${name}!`);
}
greetings('Luiz');

function doubleNumber(num) {
    return num * 2;
}
console.log(doubleNumber(5));

function avarageOfNumbers(num1, num2, num3) {
    let avarage = (num1 + num2 + num3) / 3;
    return parseInt(avarage);
}
console.log(avarageOfNumbers(2, 4, 8));

function biggerThan(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(biggerThan(5, 3));

function selfMult(num) {
    return num * num;
}
console.log(selfMult(8));

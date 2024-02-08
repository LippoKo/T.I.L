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

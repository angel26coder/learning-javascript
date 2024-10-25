let myName = "Ángela";
myName = "Ricardo";
function getCurrentYear() {
    return 2024;
}
let thisYear;
thisYear = 2023;
thisYear = 2022;
thisYear = getCurrentYear();

function addTwoNumbers(numberA, numberB) {
    return numberA + numberB;
}
let total = addTwoNumbers(7, 8);
console.log(total);

function multipleTwoNumber(numberOne, numberTwo) {
    return numberOne * numberTwo;
}
let result = multipleTwoNumber(5, 3);
console.log(result);

console.log(4 * 4);
console.log(multipleTwoNumber(4, 4));

function addAndMultiple(numberA, numberB, numberC) {
    let sum = addTwoNumbers(numberA, numberB);
    let product = multipleTwoNumber(sum, numberC);
    console.log(product);
}
addAndMultiple(13, 14, 15);

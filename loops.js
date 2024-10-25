
function sayWow() {
    console.log("wow")
    for (let i = 0; i < 5; i++) {
        console.log("wow")
    }
}
//sayWow();

function printCounter(maxNumber) {
    for (let i = 0; i < maxNumber; i++) {
        console.log(i)
    }

}
//printCounter(5);

/*function countingEvenNumbers(maxNumber) {
    for (let i = 0; i < maxNumber; i = i + 2) {
        console.log(i)
    }
}*/

//countingEvenNumbers(19)

function countingEvenNumbers(maxNumber) {
    for (let i = 0; i < maxNumber; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

function addAllNumbers(maxNumber) {
    let currentNumber = 0
    for (let i = 0; i < maxNumber; i++) {
        currentNumber = currentNumber + i
    }
    return currentNumber;
}
let currentNumber = addAllNumbers(5)

console.log(currentNumber)




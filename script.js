// Adding numbers
function addition(numOne, numTwo) {
    return numOne + numTwo;
}
// Subtract Numbers 
function subtraction(numOne, numTwo) {
    return numOne - numTwo;
} 

function mulitply(numOne, numTwo) {
    return numOne * numTwo;
}
function divide(numOne, numTwo) {
    return numOne / numTwo;
}

let firstNumber;
let secondNumber;
let operator;

function operate(numOne, operator, numTwo) {
    // Perform calculations based on operator.
    if (operator === '+') {
        return addition(numOne, numTwo);
    } else if (operator === '-') {
        return subtraction(numOne, numTwo);
    } else if (operator === '/') {
        return divide(numOne, numTwo);
    } else if (operator === '*') {
        return mulitply(numOne, numTwo);
    }
}


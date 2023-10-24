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
let operatorAction;

function operate(numOne, operator, numTwo) {
    // Perform calculations based on operator.
    if (operator === '+') {
        return addition(numOne, numTwo);
    } else if (operator === '-') {
        return subtraction(numOne, numTwo);
    } else if (operator === '/') {
        return divide(numOne, numTwo);
    } else if (operator === 'x') {
        return mulitply(numOne, numTwo);
    }
}

let display;

const operationInPprogress = document.querySelector('.operation');

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        operationInPprogress.textContent += number.textContent;
        display = operationInPprogress.textContent;
    })
});

RegExp.escape = function (string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
 
let operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        operatorAction = operator.textContent;
        operationInPprogress.textContent += operatorAction;
        display = operationInPprogress.textContent;
    })
});

let calculatorOutput = document.querySelector('.output');

let equals = document.querySelector('.equalls');
equals.addEventListener('click', () => {
    let operatorsArray = ['+', '-', 'x', '÷'];
        for (const item of operatorsArray) {
            if (display.match(RegExp.escape(item))) {
                let mathsArray = display.split(item);
                operatorAction = item;
                firstNumber = parseInt(mathsArray[0]);
                secondNumber = parseInt(mathsArray[1]);
            }
        }
    let answer = operate(firstNumber, operatorAction, secondNumber);
    calculatorOutput.textContent = answer;
})

let clearUp = document.querySelector('.clear');
clearUp.addEventListener('click', () => {
    operationInPprogress.textContent = '';
    calculatorOutput.textContent = '';
})
// Add numbers
function addition(numOne, numTwo) {
    return numOne + numTwo;
}
// Subtract Numbers 
function subtraction(numOne, numTwo) {
    return numOne - numTwo;
} 
// Multiply numbers
function mulitply(numOne, numTwo) {
    return numOne * numTwo;
}
// Divide numbers.
function divide(numOne, numTwo) {
    // Handle divide by zero error.
    if (numTwo === 0) {
        alert("Division by zero not allowed.");
        clearCalculator();
        return;
    }
    // Return division at 2 decimal places.
    return (numOne / numTwo).toFixed(2);
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
    } else if (operator === '÷') {
        return divide(numOne, numTwo);
    } else if (operator === 'x') {
        return mulitply(numOne, numTwo);
    }
}

let display;

const operationInPprogress = document.querySelector('.operation');
let calculatorOutput = document.querySelector('.output');

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
clearUp.addEventListener('click', clearCalculator);

function clearCalculator() {
    operationInPprogress.textContent = '';
    calculatorOutput.textContent = '';
    display = '';
}

let delStuff = document.querySelector('.del');
delStuff.addEventListener('click', () => {
    display = display.slice(0, -1); 
    operationInPprogress.textContent = operationInPprogress.textContent.slice(0, -1);
});

let allButtons = document.querySelectorAll('button');
allButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.classList.add('button-clicked');
        setTimeout(() => {
            event.target.classList.remove('button-clicked');
        }, 200);
    })
})
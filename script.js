// Add numbers
function addition(numOne, numTwo) {
    return numOne + numTwo;
}
// Subtract Numbers 
function subtraction(numOne, numTwo) {
    return numOne - numTwo;
}
// Multiply numbers
function multiply(numOne, numTwo) {
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

let firstNumber = null;
let secondNumber = null;
let operatorAction = null;

// perform operation based on operator.
function operate(numOne, operator, numTwo) {
    switch (operator) {
        case "+":
            return addition(numOne, numTwo);
        case "-":
            return subtraction(numOne, numTwo);
        case "x":
            return multiply(numOne, numTwo);
        case "÷":
            return divide(numOne, numTwo);
        default:
            throw Error("Invalid operator");
    }
}

let display = '';

const operationInProgress = document.querySelector('.operation');
let calculatorOutput = document.querySelector('.output');
let overallExpression = ''; // To store the overall expression.

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        let newValue = number.textContent;
        updateDisplay(newValue);
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (firstNumber === null) {
            // If firstNumber is not set, set it and the operator.
            firstNumber = parseFloat(display);
            operatorAction = operator.textContent;
            display = '';
        } else {
            // If firstNumber is set, this is the second number.
            secondNumber = parseFloat(display);
            // Perform the operation on the current pair of numbers.
            firstNumber = operate(firstNumber, operatorAction, secondNumber);
            operatorAction = operator.textContent;
            display = '';
        }
        overallExpression += operator.textContent; // Update overall expression.
        operationInProgress.textContent = overallExpression;
    });
});

const equals = document.querySelector('.equalls');
equals.addEventListener('click', () => {
    if (firstNumber !== null && operatorAction !== null) {
        // Perform the final operation with the second number.
        secondNumber = parseFloat(display);
        const result = operate(firstNumber, operatorAction, secondNumber);
        calculatorOutput.textContent = result;
        firstNumber = result;
        operatorAction = null;
        display = result.toString();
        overallExpression = display; // Update overall expression.
        operationInProgress.textContent = overallExpression;
    }
});

const clearUp = document.querySelector('.clear');
clearUp.addEventListener('click', clearCalculator);

function clearCalculator() {
    firstNumber = null;
    operatorAction = null;
    secondNumber = null;
    display = '';
    overallExpression = '';
    operationInProgress.textContent = '';
    calculatorOutput.textContent = '';
}

const delStuff = document.querySelector('.del');
delStuff.addEventListener('click', () => {
    if (display.length > 0) {
        display = display.slice(0, -1);
        overallExpression = overallExpression.slice(0, -1); // Update overall expression.
        operationInProgress.textContent = overallExpression;
    }
});

const allButtons = document.querySelectorAll('button');
allButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.classList.add('button-clicked');
        setTimeout(() => {
            event.target.classList.remove('button-clicked');
        }, 200);
    });
});

// Function to update the display when a number button is clicked
function updateDisplay(newValue) {
    if (newValue === '.' && display.includes('.')) {
        return; 
    }
    // Append the new value to the display
    display += newValue;
    overallExpression += newValue; // Update overall expression
    operationInProgress.textContent = overallExpression;
}

// Add hover effect on buttons.
allButtons.forEach((button) => {
    button.addEventListener('mouseenter', (event) => {
        event.target.classList.add('button-hover');
        setTimeout(() => {
            event.target.classList.remove('button-hover');
        }, 200);
    });
});

// Add keyboard support.
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Define a function to handle the calculation and display update
    function calculateResult() {
        if (firstNumber !== null && operatorAction !== null) {
            // Perform the final operation with the second number.
            secondNumber = parseFloat(display);
            const result = operate(firstNumber, operatorAction, secondNumber);
            calculatorOutput.textContent = result;
            firstNumber = result;
            operatorAction = null;
            display = result.toString();
            overallExpression = display; // Update overall expression.
            operationInProgress.textContent = overallExpression;
        }
    }

    if (/\d/.test(key)) {
        updateDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        operatorAction = key;
        calculateResult(); 
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Escape') {
        clearCalculator();
    } else if (key === 'Backspace') {
        if (display.length > 0) {
            display = display.slice(0, -1);
            overallExpression = overallExpression.slice(0, -1);
            operationInProgress.textContent = overallExpression;
        }
    }
});
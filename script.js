let numOne = null;
let numTwo = null;
let operator = null;
let result = null;

function add(numOne, numTwo) {
    result = numOne + numTwo;
    return result;
}

function subtract(numOne, numTwo) {
    result = numOne - numTwo;
    return result;
}

function multiply(numOne, numTwo) {
    result = numOne * numTwo;
    return result;
}

function divide(numOne, numTwo) {
    result = numOne / numTwo;
    return result;
}

function operate(numOne, numTwo, operator) {
    switch(operator) {
        case '+':
            add(numOne, numTwo);
            break;
        case '-':
            subtract(numOne, numTwo);
            break;
        case 'x':
            multiply(numOne, numTwo);
            break;
        case '/':
            divide(numOne, numTwo);
            break;
    }
}

// Function to allow the numpad to display numbers on the display div
const enterNums = document.querySelectorAll('.num');
let displayNum = '';
enterNums.forEach((button) => {
    button.addEventListener('click', function(e) {
        displayNum += button.id;
        const displaySelect = document.querySelector('#display');
        displaySelect.textContent = displayNum;
        if (numOne) {
            displayNum = '';
            displaySelect.textContent = displayNum;
            displayNum += button.id;
            displaySelect.textContent = displayNum;
            numTwo = parseInt(displayNum);
        } else if (result) {
            displaySelect.textContent = result;
            result = numOne;

        }
    })
})

// Function to store the operator selection in the operator variable
const opPad = document.querySelectorAll('.operator');
opPad.forEach((button) => {
    button.addEventListener('click', function(e) {
        operator = button.id;
        if (result) {
            numOne = result;
        } else {
            numOne = parseInt(displayNum); 
        }
        const displaySelect = document.querySelector('#display');
        displaySelect.textContent = `${numOne}`;
    })
})

const enterEqual = document.querySelector('#equals');
enterEqual.addEventListener('click', function(e) {
    operate(numOne, numTwo, operator);
    console.log(result)
    const displaySelect = document.querySelector('#display');
    displaySelect.textContent = `${result}`
})

const clearCalc = document.querySelector('#C');
clearCalc.addEventListener('click', function(e) {
    numOne = null;
    numTwo = null;
    operator = null;
    result = null;
    displayNum = '';

    const displaySelect = document.querySelector('#display');
    displaySelect.textContent = '';
})

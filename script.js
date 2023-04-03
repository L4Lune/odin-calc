let numOne = null;
const numTwo = null;
let operator = null;
const result = null;

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
        case '*':
            multiply(numOne, numTwo);
            break;
        case '/':
            divide(numOne, numTwo);
            break;
    }
}

// Function to allow the numpad to display numbers on the display div
const numpad = document.querySelectorAll('.num');
let displayNum = '';
numpad.forEach((button) => {
    button.addEventListener('click', function(e) {
        displayNum += button.id;
        const displaySelect = document.querySelector('#display');
        displaySelect.textContent = displayNum;
    })
})

// Function to store the operator selection in the operator variable
const opPad = document.querySelectorAll('.operator');
opPad.forEach((button) => {
    button.addEventListener('click', function(e) {
        operator = button.id;
        numOne = displayNum; 
    })
})

const enterSecondNum = document.querySelectorAll

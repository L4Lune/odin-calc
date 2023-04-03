const numOne = null;
const numTwo = null;
const operator = null;
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

const numpad = document.querySelectorAll('.num');
numpad.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})
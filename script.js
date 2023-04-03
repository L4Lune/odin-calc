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
    if (numTwo > 0 || numTwo < 0){
        result = numOne / numTwo;
        return result;
    } else {
        const displaySelect = document.querySelector('#display');
        displaySelect.textContent = 123;  
    }

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
        button.classList.add('numpadPressed')
        displayNum += button.id;
        const displaySelect = document.querySelector('#display');
        displaySelect.textContent = displayNum;
        if (numOne) {
            displayNum = '';
            displaySelect.textContent = displayNum;
            displayNum += button.id;
            displaySelect.textContent = displayNum;
            numTwo = parseFloat(displayNum);
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
        button.classList.add('operatorsPressed');
        operator = button.id;
        if (result) {
            numOne = result;
        } else {
            numOne = parseFloat(displayNum); 
        }
        const displaySelect = document.querySelector('#display');
        displaySelect.textContent = `${numOne}`;
    })
    const enterEqual = document.querySelector('#equals');
    enterEqual.addEventListener('click', function(e) {
        button.classList.remove('pressed');
    })
})

const enterEqual = document.querySelector('#equals');
enterEqual.addEventListener('click', function(e) {
        operate(numOne, numTwo, operator);
        console.log(result)
        const displaySelect = document.querySelector('#display');
        displaySelect.textContent = `${result}`

        if (result === null) {
            displaySelect.textContent = '';
        }
})

const clearCalc = document.querySelector('#C');
clearCalc.addEventListener('click', function(e) {
    clearCalc.classList.add('othersPressed');
    numOne = null;
    numTwo = null;
    operator = null;
    result = null;
    displayNum = '';

    const displaySelect = document.querySelector('#display');
    displaySelect.textContent = '';
})

const plusOrMinus = document.querySelector('#plusOrMinus');
plusOrMinus.addEventListener('click', function(e) {
    if (displayNum === `${displayNum}`) {
        plusOrMinus.classList.add('othersPressed');
        displayNum = `-${displayNum}`
        const displaySelect = document.querySelector('#display');
        displaySelect.textContent = `${displayNum}`;
    } else if (displayNum === `-${displayNum}`) {
        plusOrMinus.classList.add('othersPressed');
        displayNum = `+${displayNum}`
        const displaySelect = document.querySelector('#display');
    }

})

const percent = document.querySelector('#percent');
percent.addEventListener('click', function(e) {
    percent.classList.add('othersPressed');
    displayNum = displayNum / 100;
    const displaySelect = document.querySelector('#display');
    displaySelect.textContent = `${displayNum}`;

})

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', function(e) {
    displayNum = `${displayNum}.`;
    const displaySelect = document.querySelector('#display');
    displaySelect.textContent = `${displayNum}`;
})

const othersPressed = document.querySelectorAll('.others')
othersPressed.forEach(other => other.addEventListener('transitionend', removeTransition));

const numpadPressed = document.querySelectorAll('.num')
numpadPressed.forEach(numpad => numpad.addEventListener('transitionend', removeTransition));

const operatorsPressed = document.querySelectorAll('.operator');
operatorsPressed.forEach(operator => operator.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('othersPressed') || e.target.classList.remove('numpadPressed') || e.target.classList.remove('operatorsPressed');
    console.log(e.propertyName);
}
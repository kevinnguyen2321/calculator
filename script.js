let firstNum;
let secondNum;
let operator;
let displayValue = "";


const display = document.querySelector('.text');
const buttons = document.querySelectorAll('.calc-btns')


buttons.forEach(button => {
    button.addEventListener('click', handleBtnClick)
});








function add (a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator,numOne,numTwo) {
    switch (operator) {
        case "+" :
            add(numOne,numOne);
            break;
        
        case "-":
            subtract(numOne,numTwo);
            break;
    }
}

function handleBtnClick (e) {
    const buttonText = e.target.textContent;
    if (buttonText === 'AC') {
        display.textContent = 0;
        displayValue = "";
        
    } else if (buttonText === 'Clear') {
        display.textContent = "";
        displayValue = ""
        
    } else {
        displayValue += buttonText;
        display.textContent = displayValue;
        if (displayValue.includes('+')) {
            let splitValue = displayValue.split('')
            console.log(splitValue)
            let indexOp = splitValue.indexOf('+');
            console.log(indexOp);
            let numsBeforeOp = splitValue.slice(0,indexOp);
            console.log(numsBeforeOp.join(''));
            let numsAfterOp = splitValue.slice (indexOp + 1);
            console.log(numsAfterOp.join(''));
        }
            


    }
}



//DOM Variables and Display Variable//
let displayValue = "";
const display = document.querySelector('.text');
const buttons = document.querySelectorAll('.calc-btns')


//Event Listener for buttons//
buttons.forEach(button => {
    button.addEventListener('click', handleBtnClick)
});


//Functions for Operations//
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
    if (operator === '+') {
        return add(parseFloat(numOne), parseFloat(numTwo));
    
    } else if (operator === '-') {
        return subtract(parseFloat(numOne), parseFloat(numTwo));
        
    } else if (operator === 'x') {
        return multiply(parseFloat(numOne), parseFloat(numTwo));
        
    } else if (operator === '÷') {
        return divide(parseFloat(numOne), parseFloat(numTwo));
        
    }
}



// Function for each button event//
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
        if (displayValue.includes('+') || displayValue.includes('-') || displayValue.includes ('÷') || displayValue.includes('x')) {
            handleOperators(e);
        }
    }
}



function handleOperators(e) {
    let splitValue = displayValue.split('')
    if (splitValue.includes('+')) {
        let indexOp = splitValue.indexOf('+');
        let firstNum = splitValue.slice(0,indexOp).join('');
        let secondNum = splitValue.slice (indexOp + 1, splitValue.indexOf('=')).join('');
        let operator = splitValue[indexOp];
        if (displayValue.includes('=')) {
            let result = operate(operator,firstNum, secondNum)
            console.log(result)
            display.textContent = result;
        }
    
    } else if (splitValue.includes('-')) {
        let indexOp = splitValue.indexOf('-');
        let firstNum = splitValue.slice(0,indexOp).join('');
        let secondNum = splitValue.slice (indexOp + 1, splitValue.indexOf('=')).join('');
       let operator = splitValue[indexOp];
       if (displayValue.includes('=')) {
        let result = operate(operator,firstNum, secondNum)
        console.log(result)
        display.textContent = result;
       }
    
    } else if (splitValue.includes('÷')) {
        let indexOp = splitValue.indexOf('÷');
        let firstNum = splitValue.slice(0,indexOp).join('');
        let secondNum = splitValue.slice (indexOp + 1, splitValue.indexOf('=')).join('');
       let operator = splitValue[indexOp];
       if (displayValue.includes('=')) {
        let result = operate(operator,firstNum, secondNum)
        console.log(result)
        display.textContent = result;
       }

        
    } else if (splitValue.includes('x')) {
        let indexOp = splitValue.indexOf('x');
        let firstNum = splitValue.slice(0,indexOp).join('');
        let secondNum = splitValue.slice (indexOp + 1, splitValue.indexOf('=')).join('');
       let operator = splitValue[indexOp];
       if (displayValue.includes('=')) {
        let result = operate(operator,firstNum, secondNum)
        console.log(result)
        display.textContent = result;
       }
        
    } 
    
}

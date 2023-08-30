// DOM Variables and Display Variable//
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
        handleOperators(e);
    }
}




function handleOperators(e) {

let operands = displayValue.split(/[\+\-\x\÷]/g).filter(Boolean);
let operators = displayValue.match(/[\+\-\x\÷]/g);
let firstNumber = operands.shift()
let answer = "";


for (const operator of operators) {
    const nextNumber = operands.shift();
    
    if (nextNumber === undefined && displayValue.length >= 2) {
        display.textContent = firstNumber;
       

    } else if (operator === '+') {
        answer = operate(operator,firstNumber,nextNumber)
        
            firstNumber = answer;
            operators = [];
    
    } else if (operator === '-') {
        answer = operate(operator, firstNumber, nextNumber)
        
            firstNumber = answer;
            operators = [];    
    
    } else if (operator === 'x') {
        answer = operate(operator, firstNumber, nextNumber);
        
            firstNumber = answer;
            operators = [];
            
    } else if (operator === '÷') {
        
            if (nextNumber === 0) {
                display.textContent = "ERROR"
                
            } else {
                answer = operate(operator, firstNumber, nextNumber)
                firstNumber = answer;
                operators = [];
            }
            
    } if (displayValue.includes('=')) {
            display.textContent = answer;
            }
        
        } 
    }





    





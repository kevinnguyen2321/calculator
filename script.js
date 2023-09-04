// DOM Variables and Display Variable//
let displayValue = "";
let decimalAdded = false;
const pattern = /[+\-\x\÷]/;
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
 
        
     if ((displayValue[displayValue.length-1] == 0 && displayValue[displayValue.length -2] === "÷")  && buttonText === '=') {
        display.textContent = "ERROR";
        alert('ERROR')
        displayValue = "";
    
    
    } else if (Array.from(displayValue).includes('+') || Array.from(displayValue).includes('-')|| Array.from(displayValue).includes('x')
    || Array.from(displayValue).includes('÷')) {
            if (pattern.test(displayValue[displayValue.length-1])) {
                let end = Array.from(displayValue).pop();
                display.textContent = displayValue;
            } 
                if (buttonText!== "+" && buttonText!== "-" && buttonText!== "x" && buttonText!== "÷" ) {
                    display.textContent = displayValue + buttonText;
                    displayValue = display.textContent
                        if (buttonText === "=") {
                            handleOperators(e)
                        } 
                }
    
    
    } else if (buttonText === '=') {
        handleOperators(e)
        
    }  else if (/[+\-\x\÷\%]/.test(buttonText)) {
        if (!displayValue) {
           display.textContent = 0;
        
        }  else {
            displayValue += buttonText;
            display.textContent = displayValue;
        } 
    } else {
        displayValue += buttonText;
        display.textContent = displayValue;
            
    } 
    if (buttonText === 'AC' || buttonText === '%') {
        display.textContent = 0;
        displayValue = ""
        
    } else if (buttonText === "Clear") {
       
       displayValue = displayValue.replace(/Clear/g, "").slice(0,-1)
       display.textContent = displayValue

    } else {
        display.textContent = displayValue.replace(/\.+/g, '.')
    }
    
}

 //Function to handle numbers & operators//
function handleOperators(e) {

const buttonText = e.target.textContent;
let operands = displayValue.split(/[\+\-\x\÷]/g).filter(Boolean);
let operators = displayValue.match(/[\+\-\x\÷]/g);
let firstNumber = operands.shift()
let answer = "";

    for (const operator of operators) {
        let nextNumber = operands.shift();
    
        if (operator === '+') {
        answer = operate(operator,firstNumber,nextNumber)
            firstNumber = answer;
            
        } else if (operator === '-') {
            answer = operate(operator, firstNumber, nextNumber)
            firstNumber = answer;
            
        } else if (operator === 'x') {
            answer = operate(operator, firstNumber, nextNumber);
            firstNumber = answer;
            
        } else if (operator === '÷') {
        
            if (nextNumber == 0) {
                display.textContent = "ERROR";
                return;
            
            } else {
                answer = operate(operator, firstNumber, nextNumber)
                firstNumber = answer;
            }
        }       
                if (nextNumber === undefined && buttonText === '=') {
                   firstNumber = Array.from(displayValue).unshift()
                    display.textContent = displayValue;
                
                } else if (buttonText === '=') {
                    let decimalIndex = answer.toString().indexOf('.');
                    let stringAnswer = answer.toString();
                    
                    if (answer.toString().includes('.') && stringAnswer.length -1 - decimalAdded >= 7) {
                        display.textContent = answer.toFixed(7) + operands;
                        displayValue = firstNumber;
                    } else {
                        display.textContent = answer + operands;
                        displayValue = firstNumber;
                    }
                    
                } 
    } 
}      
    











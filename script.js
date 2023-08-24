let firstNum;
let secondNum;
let operator;


const display = document.querySelector('.text');
const buttons = document.querySelectorAll('.calc-btns')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = button.textContent;
        if (buttonText === 'AC') {
            display.textContent = 0;
            
        } else if (buttonText === 'Clear') {
            display.textContent = "";
            
            
        } else  {
            firstNum += display.textContent = buttonText;
            
        }
            
    });
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
            subtract(numOne,numTwo)
            break;
    }
}

const numberButtons = document.querySelectorAll('.numberbuttons');
const display = document.querySelector('#result');
const pastOperation = document.querySelector('#input');
let a = 0;
let displayA = "";
let operator = "";
let b = 0;
let displayB = "";
let isFirstOperand = true;

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = parseInt(button.textContent);
    
    if (isFirstOperand) {
      a = a * 10 + buttonText; 
      displayA = a.toString();
      display.textContent = displayA;
    } else {
      b = b * 10 + buttonText; 
      displayB += buttonText;
      display.textContent = displayA + operator + displayB; 
    }
  });
});

const operatorButton = document.querySelectorAll('.operatorsbuttons');

operatorButton.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    
    if (isFirstOperand) {
      operator = buttonText;
      display.textContent = displayA + operator;
      isFirstOperand = false; // Switch to inputting the second operand
    }
  });
});

function add() {
    console.log(a + b);
}

function substract() {
    console.log(a - b);
}

function multiply() {
    console.log(a * b);
}

function divide() {
    console.log(a / b);
}

function operate() {

}


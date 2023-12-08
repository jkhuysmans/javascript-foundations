const numberButtons = document.querySelectorAll('.numberbuttons');
const display = document.querySelector('#result')
const pastOperation = document.querySelector('#input')
let numberA = '';

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = parseInt(button.textContent);
    numberA += buttonText;
    display.textContent = numberA;
  });
});

const operatorButton = document.querySelectorAll('.operatorsbuttons');

operatorButton.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    operator = buttonText;
    console.log(buttonText)
  });
});



let a = 0;
let operator = "";
let b = 0;

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


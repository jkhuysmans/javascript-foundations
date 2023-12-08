const numberButtons = document.querySelectorAll('.numberbuttons');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = parseInt(button.textContent);
    a = buttonText;
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


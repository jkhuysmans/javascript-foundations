const numberButtons = document.querySelectorAll('.numberbuttons');
let display = document.querySelector('#result');
let pastOperation = document.querySelector('#input');
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
        isFirstOperand = false;
      }
  });
});

const equalButton = document.querySelectorAll('.equalbutton');
equalButton.forEach(button => {
    button.addEventListener('click', () => { 
          console.log("result")
          operate()   
    });
  });

  const eraseButton = document.querySelectorAll('.erasebutton');
eraseButton.forEach(button => {
    button.addEventListener('click', () => { 
          console.log("erase")

          if (operator !== "" && displayB !== "") {
            displayB = displayB.slice(0, -1);
            b = parseInt(displayB) || 0;

            display.textContent = displayA + operator + displayB;

          } else if (operator !== "") {
            operator = operator.slice(0, -1);
            display.textContent = displayA + operator;
            isFirstOperand = true;

          } else if (displayA !== "") {
            displayA = displayA.slice(0, -1);
            a = parseInt(displayA) || 0;
            display.textContent = displayA;
          };
    });
  });

  const eraseAll = document.querySelectorAll('.eraseall');
eraseAll.forEach(button => {
    button.addEventListener('click', () => { 
          console.log("erase all")

          pastOperation.textContent = "";

          a = 0;
          b = 0;
          displayB = "";
          operator = "";
          displayA = a;
          display.textContent = displayA;
          isFirstOperand = true;
    });
  });





let result = "";

function add() {
    display.textContent = "";
    result = (a + b);
}

function substract() {
    display.textContent = "";
    result = (a - b);
}

function multiply() {
    display.textContent = "";
    result = (a * b);
}

function divide() {
    display.textContent = "";
    result = (a / b);
}

function operate() {

    pastOperation.textContent = displayA + operator + displayB; 

    if (operator == "+") {add()} else
    if (operator == "-") {substract()} else 
    if (operator == "x") {multiply()} else
    if (operator == "/") {divide()}

    a = result;
    b = 0;
    displayB = "";
    operator = "";
    displayA = result.toString();
    display.textContent = displayA;
    isFirstOperand = true;
    }


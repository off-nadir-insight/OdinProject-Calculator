const btns = document.getElementsByClassName('button');
let numA = 0;
let numB = 0;
let operator;
let displayValue = "0";
let secondaryDisplayValue = "0";
const display = document.getElementById("display--numbers");
const secondaryDisplay = document.getElementById("secondary-display");

const operatorFunctions = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  sub: function(num1, num2) {
    return num1 - num2;
  },
  mul: function (num1, num2) {
    return num1 * num2;
  },
  div: function (num1, num2) {
    return (num1 / num2).toFixed(7);
  }
}

// handles css styling for clicking buttons
Array.from(btns).forEach(btn => btn.addEventListener('mousedown', event => {
  event.target.classList.add('button-clicked')
}));
Array.from(btns).forEach(btn => btn.addEventListener('mouseup', event => {
  event.target.classList.remove('button-clicked')
}));
Array.from(btns).forEach(btn => btn.addEventListener('mouseleave', event => {
  event.target.classList.remove('button-clicked')
}));

// capture button clicks
Array.from(btns).forEach(btn => btn.addEventListener('click', event => {
  handleBtnClick(event)
}));

function updateDisplay() {
  display.textContent = displayValue;
  secondaryDisplay.textContent = secondaryDisplayValue;
}

function clearScreen() {
  displayValue = "0";
  secondaryDisplayValue = "0"
  numA = 0;
  numB = 0;
  operator = null;
  updateDisplay();
}

function handleBtnClick(event) {
  const {btnValue} = event.target.dataset

  if (btnValue === "C") {
    clearScreen()
  }

  if (btnValue === "=") {
    numB = Number(displayValue);
    if (Object.keys(operatorFunctions).includes(operator)){
      displayValue = operatorFunctions[operator](numA, numB)
    }
    numA = 0;
    numB = 0;
    operator = null;
    updateDisplay();
  }

  if (btnValue === "add" || btnValue === "sub" || btnValue === "mul" || btnValue === "div") {
    numA = Number(displayValue);
    operator = btnValue;
    secondaryDisplayValue = `${numA} ${event.target.textContent}`;
    displayValue = "0";
  }

  if (displayValue === "0" && btnValue <= 9 && btnValue >= 0) {
    displayValue = event.target.dataset.btnValue;
  } else if (displayValue.length < 10 && btnValue <= 9 && btnValue >= 0) {
    displayValue += event.target.dataset.btnValue;
  }
  updateDisplay()
}
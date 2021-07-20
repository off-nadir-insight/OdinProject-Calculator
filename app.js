const btns = document.getElementsByClassName('button')
let numA = 0;
let numB = 0;
let operator;

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
  // console.log(Number(event.target.dataset.btnValue))
  handleBtnClick(event)
}));

let displayValue = ""
const display = document.getElementById("display--numbers")

function updateDisplay() {
  display.textContent = displayValue;
}


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
    return num1 / num2
  }
}

// function operate(mathFunc, num1, num2) {
//   return mathFunc(num1, num2)
// }

function clearScreen() {
  displayValue = ""
  numA = 0;
  numB = 0;
  updateDisplay()
}

function handleBtnClick(event) {
  const {btnValue} = event.target.dataset
  console.log(btnValue)

  if (btnValue === "C") {
    clearScreen()
  }
  if (btnValue === "add" || btnValue === "sub" || btnValue === "mul" || btnValue === "div") {
    if (numA) {
      numB = Number(displayValue);
      displayValue = operatorFunctions[operator](numA, numB);
      updateDisplay();
      console.log(display.textContent)
      numB = 0;
      return;
    }
    numA = Number(displayValue);
    operator = btnValue;
    console.log(numA, operator, numB)
    
    displayValue = "";

  }
  if (displayValue.length < 10 && btnValue <= 9 && btnValue >= 0) {
    displayValue += event.target.dataset.btnValue
  }
  updateDisplay()
}
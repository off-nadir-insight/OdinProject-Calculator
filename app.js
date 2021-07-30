const btns = document.getElementsByClassName('button');
let numA = 0;
let numB = 0;
let operator;
let displayValue = "0";
let secondaryDisplayValue = "0";
const display = document.getElementById("display--numbers");
const secondaryDisplay = document.getElementById("secondary-display");

const operatorFunctions = {
  "+": function(num1, num2) {
    return num1 + num2;
  },
  "-": function(num1, num2) {
    return num1 - num2;
  },
  "*": function (num1, num2) {
    return num1 * num2;
  },
  "/": function (num1, num2) {
    return (num1 / num2);
  },
  "%": function (num1, num2) {
    return (num1 % num2);
  }
}

// attempt to cut down on errors from key presses that aren't of interest to app
const validKeys = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","%","=","Backspace","Escape","c","C","."]

// handles css styling for clicking buttons
Array.from(btns).forEach(btn => btn.addEventListener('mousedown', event => {
  event.target.classList.add('button-clicked');
}));
Array.from(btns).forEach(btn => btn.addEventListener('mouseup', event => {
  event.target.classList.remove('button-clicked');
}));
Array.from(btns).forEach(btn => btn.addEventListener('mouseleave', event => {
  event.target.classList.remove('button-clicked');
}));

// capture button clicks
Array.from(btns).forEach(btn => btn.addEventListener('click', event => {
  handleBtnClick(event);
}));

// keyboard listeners
window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event) {
  let {key: btnValue} = event;
  if (validKeys.includes(btnValue)) {
    if (["Escape", "c", "C"].includes(btnValue)) {
      btnValue = "c";
    }
    if (["Backspace", "<"].includes(btnValue)) {
      btnValue = "<";
    }
    console.log(btnValue)
    const targetBtn = document.querySelector(`div[data-btn-value="${btnValue}"]`);
    targetBtn.classList.add('button-clicked');
    setInterval(()=>{targetBtn.classList.remove('button-clicked');}, 100)
    console.log(targetBtn);

    if (btnValue === "C" || btnValue === "c" || btnValue === "Escape") {
      clearScreen()
    }

    if (btnValue === "Backspace") {
      if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
      } else {
        displayValue = "0";
      }
    }

    if (btnValue === "=" || btnValue === "Enter") {
      if (operator) {
        numB = Number(displayValue);
        if (operator === "/" && numB === 0) {
          secondaryDisplayValue = ":(";
          displayValue = "inf err";
          updateDisplay();
          return;
        }
        secondaryDisplayValue += ` ${numB}`;
        if (Object.keys(operatorFunctions).includes(operator)){
          displayValue = operatorFunctions[operator](numA, numB);
          if (displayValue.toString().length > 7) {
            displayValue = displayValue.toExponential(4);
          }
        }
        numA = 0;
        numB = 0;
        operator = null;
        updateDisplay();
      }
    }
  }

  // requires conversion of +-*/% to keywords
  if (btnValue === "+" || btnValue === "-" || btnValue === "*" || btnValue === "/" || btnValue === "%") {
    if (numA) {
      numB = Number(displayValue);
      numA = operatorFunctions[operator](numA, numB);
      secondaryDisplayValue = `${numA} ${btnValue}`;
      operator = btnValue;
      displayValue = "0";
    } else {
      numA = Number(displayValue);
      operator = btnValue;
      secondaryDisplayValue = `${numA} ${btnValue}`;
      displayValue = "0";
    }
  }

  if (btnValue === "." && !displayValue.includes(".")) {
    displayValue += ".";
  }

  if (displayValue === "0" && btnValue <= 9 && btnValue >= 0) {
    displayValue = btnValue;
  } else if (displayValue.length < 10 && btnValue <= 9 && btnValue >= 0) {
    displayValue += btnValue;
  }
  updateDisplay()
} 

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

  if (btnValue === "C" || btnValue === "c") {
    clearScreen()
  }

  if (btnValue === "<") {
    if (displayValue.length > 1) {
      displayValue = displayValue.slice(0, -1);
    } else {
      displayValue = "0";
    }
  }

  if (btnValue === "=") {
    if (operator) {
      numB = Number(displayValue);
      if (operator === "/" && numB === 0) {
        secondaryDisplayValue = ":(";
        displayValue = "inf err";
        updateDisplay();
        return;
      }
      secondaryDisplayValue += ` ${numB}`;
      if (Object.keys(operatorFunctions).includes(operator)){
        displayValue = operatorFunctions[operator](numA, numB);
        if (displayValue.toString().length > 7) {
          displayValue = displayValue.toExponential(4);
        }
      }
      numA = 0;
      numB = 0;
      operator = null;
      updateDisplay();
    }
  }

  if (btnValue === "+" || btnValue === "-" || btnValue === "*" || btnValue === "/" || btnValue === "%") {
    if (numA) {
      numB = Number(displayValue);
      numA = operatorFunctions[operator](numA, numB);
      secondaryDisplayValue = `${numA} ${btnValue}`;
      operator = btnValue;
      displayValue = "0";
    } else {
      numA = Number(displayValue);
      operator = btnValue;
      secondaryDisplayValue = `${numA} ${btnValue}`;
      displayValue = "0";
    }
  }

  if (btnValue === "." && !displayValue.includes(".")) {
    displayValue += ".";
  }

  if (displayValue === "0" && btnValue <= 9 && btnValue >= 0) {
    displayValue = event.target.dataset.btnValue;
  } else if (displayValue.length < 10 && btnValue <= 9 && btnValue >= 0) {
    displayValue += event.target.dataset.btnValue;
  }
  updateDisplay()
}


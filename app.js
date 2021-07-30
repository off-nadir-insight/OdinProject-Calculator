const btns = document.getElementsByClassName('button');
let numA = 0;
let numB = 0;
let operator;
let displayValue = "0";
let secondaryDisplayValue = "0";
let btnValue;
const display = document.getElementById("display--numbers");
const secondaryDisplay = document.getElementById("secondary-display");
const inputDisplayMaxLength = 9;
const outputDisplayMaxLength = 5;

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

const validKeys = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","%","=","Backspace","Escape","c","C",".","<", "Enter", "sign"]

function isValidKey(btnValue) {
  return validKeys.includes(btnValue)
}

// *** handle css styling ***
Array.from(btns).forEach(btn => btn.addEventListener('mousedown', event => {
  event.target.classList.add('button-clicked');
}));
Array.from(btns).forEach(btn => btn.addEventListener('mouseup', event => {
  event.target.classList.remove('button-clicked');
}));
Array.from(btns).forEach(btn => btn.addEventListener('mouseleave', event => {
  event.target.classList.remove('button-clicked');
}));

function animateKeyboardInput(event) {
  if (event.type === "keydown") {
    const targetBtn = document.querySelector(`div[data-btn-value="${btnValue}"]`);
    targetBtn.classList.add('button-clicked');
    setInterval(()=>{
      targetBtn.classList.remove('button-clicked');
    }, 200)
  }
}

// *** support functions ***

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

function assignBtnValue(e) {
  if (e.type === "click") {
    btnValue = e.target.dataset.btnValue;
  }
  if (e.type === "keydown") {
    btnValue = e.key;
  }
  return btnValue
}

function formatDisplay(num) {
  if (num.toString().length > outputDisplayMaxLength) {
    return num.toExponential(3);
  }
  return num;
}

// *** capture inputs *** 
Array.from(btns).forEach(btn => btn.addEventListener('click', handleInput));
window.addEventListener('keydown', handleInput);


// *** primary logic ***
function handleInput(event) {
 
  btnValue = assignBtnValue(event)

  if (validKeys.includes(btnValue)) {
    
    // account for various keyboard keys targeting same functionality
    if (["Escape", "c", "C"].includes(btnValue)) {
      btnValue = "c";
    }
    if (["Backspace", "<"].includes(btnValue)) {
      btnValue = "<";
    }
    if (["Enter"].includes(btnValue)) {
      btnValue = "=";
    }

    // screen feedback on keyboard input
    animateKeyboardInput(event);


    // *** input logic begins ***
    if (btnValue === "c") {
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
          displayValue = formatDisplay(displayValue)
          // if (displayValue.toString().length > 6) {
          //   displayValue = displayValue.toExponential(4);
          // }
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
      displayValue = btnValue;
    } else if (displayValue.length < inputDisplayMaxLength && btnValue <= 9 && btnValue >= 0) {
      displayValue += btnValue;
    }

    if (btnValue === "sign") {
      if (displayValue === "0") return;
      displayValue *= -1;
    }

    updateDisplay()
  }
} 
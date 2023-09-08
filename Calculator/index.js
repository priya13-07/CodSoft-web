// Get references to HTML elements
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const btnDivide = document.getElementById("btn-divide");
const btnMultiply = document.getElementById("btn-multiply");
const btnSubtract = document.getElementById("btn-subtract");
const btnAdd = document.getElementById("btn-add");
const clearButton = document.getElementById("clear");
const resultButton = document.getElementById("result");

// Store the current calculation operator
let operator = null;

// Store the current input numbers
let num1 = "";
let num2 = "";

// Update the displayed numbers
function updateDisplay() {
  num1Element.textContent = num1;
  num2Element.textContent = num2;
}

// Function to handle number button clicks
function numberClicked(number) {
  if (operator === null) {
    num1 += number;
  } else {
    num2 += number;
  }
  updateDisplay();
}

// Function to handle operator button clicks
function operatorClicked(selectedOperator) {
  if (num1 !== "") {
    operator = selectedOperator;
  }
}

// Function to clear the calculator
function clearCalculator() {
  num1 = "";
  num2 = "";
  operator = null;
  updateDisplay();
}

// Function to calculate and display the result
function calculateResult() {
  if (num1 !== "" && num2 !== "" && operator !== null) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result = 0;

    switch (operator) {
      case "/":
        result = n1 / n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "+":
        result = n1 + n2;
        break;
    }

    num1 = result.toString();
    num2 = "";
    operator = null;
    updateDisplay();
  }
}

// Add event listeners to buttons
btnDivide.addEventListener("click", () => operatorClicked("/"));
btnMultiply.addEventListener("click", () => operatorClicked("*"));
btnSubtract.addEventListener("click", () => operatorClicked("-"));
btnAdd.addEventListener("click", () => operatorClicked("+"));
clearButton.addEventListener("click", clearCalculator);
resultButton.addEventListener("click", calculateResult);

// Initialize display
updateDisplay();

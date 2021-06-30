const numberButtons = document.querySelectorAll("[data-button]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousText = document.querySelector("[data-previous]");
const currentText = document.querySelector("[data-current]");

//Adding newButtons
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const timesButton = document.querySelector("#times");

let currentNumber = "";
let previousNumber = "";
let operatorSign = "";
let sum = "";
//functions
function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operate(a, b, operator) {
  //calls one of the above functions
  let num1 = stringToFloat(a);
  let num2 = stringToFloat(b);
  switch (operator) {
    case plus:
      add(num1, num2);
      break;
    case "minus":
      substract(num1, num2);
      break;
    case "times":
      multiply(num1, num2);
      break;
    case "divide":
      divide(num1, num2);
      break;
    default:
      break;
  }
}
function display(number) {
  if (currentText.innerHTML.includes(".") && number === ".") return;
  currentText.innerHTML += number.toString();
}
function clearScreen() {
  currentText.innerHTML = "";
  previousText.innerHTML = "";
}
// make string to number
function stringToFloat(text) {
  return parseFloat(text);
}
/* =============== BUTTON ACTIONS =============== */
// number buttons actions
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display(button.innerHTML);
  });
});

// Operator buttons click
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // currentNumber = currentText.innerHTML.toString();
    // console.log(currentNumber);
    // previousText.innerHTML = currentText.innerHTML + button.innerHTML;
    // currentText.innerHTML = "";
    // operatorSign = button.id;
    // console.log(operatorSign);
    // previousNumber = currentNumber;
    // currentNumber = "";
    previousText.innerHTML = currentText.innerHTML;
    currentText.innerHTML='';
    operatorSign = button.id;
    // console.log('operation sign:',operatorSign);
    // previousNumber = previousText.innerHTML.toString();
    // console.log('Previous Number:', typeof previousNumber,previousNumber);
    // currentNumber = currentText.innerHTML.toString();
    // console.log("Current Number:",typeof currentNumber,currentNumber);

  });
});

// Equal button click
equalButton.addEventListener("click", (e) => {
  // call operate
  previousNumber =parseFloat( previousText.innerHTML.toString());
  currentNumber = parseFloat(currentText.innerHTML.toString());
  
  let a = operate(currentNumber,previousNumber,operatorSign);
  console.log(typeof operatorSign,operatorSign);
  console.log(typeof currentNumber,currentNumber);
  
});

//AC button click
clearButton.addEventListener("click", () => {
  clearScreen();
  currentNumber = "";
  previousNumber = "";
});

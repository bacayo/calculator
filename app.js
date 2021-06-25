var tabURL = window.location.href;
var queryString = window.location.search;

const numberButtons = document.querySelectorAll("[data-button]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousText = document.querySelector("[data-previous]");
const currentText = document.querySelector("[data-current]");

let dummy = '';

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
function operate(num1, num2, operator) {}

function display() {
    numberButtons.forEach(button=>{
        button.addEventListener('click',()=>{
            currentText.innerHTML += button.innerHTML.toString();
        })
    })
}

function clear()
{
    clearButton.addEventListener('click',(e)=>{
        currentText.innerHTML = '';
        previousText.innerHTML = '';
    })
}

display();
clear();

/* Where am i? i did clear function, contuniue with display and do math  */
class Calculator{
  constructor(currentText,previousText){
    this.currentText = currentText;
    this.previousText = previousText;
    this.clear();
  }
  clear(){
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;

  }
  delete(){

  }
  addNumber(number)
   {
    if(number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
    
   }
   chooseOperation(operation)
   {
     if(this.currentOperand === '') return;
     if(this.previousOperand !== '')
     {
       this.operate();
     }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
   }
   operate()
   {
    let operation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand); //27:44;
   }
   update()
   {
    this.currentText.innerHTML = this.currentOperand;
    this.previousText.innerHTML = this.previousOperand;
   }
}



const numberButtons = document.querySelectorAll("[data-button]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousText = document.querySelector("[data-previous]");
const currentText = document.querySelector("[data-current]");

//Adding newButtons 
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const divideButton = document.querySelector('#divide');
const timesButton = document.querySelector('#times');

let currentNumber = null;
let previousNumber = null;
let operator = null;


const calculator = new Calculator(currentText,previousText);

numberButtons.forEach(button=>{
  button.addEventListener('click',()=>{
    calculator.addNumber(button.innerHTML);
    calculator.update();
  })
})

operatorButtons.forEach(button=>{
  button.addEventListener('click',()=>{
    calculator.chooseOperation(button.innerHTML);
    calculator.update();
  })
})
equalButton.addEventListener('click',button=>{
  calculator.operate();
  calculator.update();
})

// function add(num1, num2) {
//   plusButton.addEventListener('click',(e)=>{
//     currentText.innerHTML += plusButton.innerHTML.toString();
//     operator = plusButton.id;
//     return num1 + num2;
//   })
// }

// function substract(num1, num2) {
//   minusButton.addEventListener('click',()=>{
//     currentText.innerHTML += minusButton.innerHTML.toString();
//     operator = minusButton.id
//     return num1 - num2;
//   })
// }
// function multiply(num1, num2) {
//   timesButton.addEventListener('click',()=>{
//     currentText.innerHTML += timesButton.innerHTML.toString();
//     operator = timesButton.id
//     return num1*num2;
//   })
// }
// function divide(num1, num2) {
//   divideButton.addEventListener('click',(e)=>{
//     currentText.innerHTML += divideButton.innerHTML.toString();
//     operator = divideButton.id;
//     return num1 / num2;
//   })
// }
// function operate(num1, num2, operationSign)
// {
//   operationSign = operator;
//   if(operationSign == plusButton.id)
//   {
//     add()
//   }
// }

// function display() {
//   numberButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       currentText.innerHTML += button.innerHTML.toString();
//     });
//   });
// }

// function clear() {
//   clearButton.addEventListener("click", (e) => {
//     currentText.innerHTML = "";
//     previousText.innerHTML = "";
//   });
// }
// function deleteNumber() {
//   deleteButton.addEventListener("click", () => {
//     let arrayed = currentText.innerHTML.split("");
//     let popped = arrayed.pop();
//     currentText.innerHTML = arrayed.join("");
//   });
// }

// display();
// clear();
// deleteNumber();
// divide(1,2);
// add(1,2);
// multiply(1,2);
// substract(1,2);
// operate(currentNumber,previousNumber,operator);
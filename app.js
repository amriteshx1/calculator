const displayBox = document.querySelector('#display');

let operator ="";
let firstNumber = "";
let secondNumber = "";

const add = function (a,b){
    return a + b;
}
const subtract = function (a,b){
    return a - b;
}
const multiply = function (a,b){
    return a * b;
}
const divide = function (a,b){
    if(b== 0) return "Error!";
    return a / b;
}

function operate (operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null; 
    }
}

function changeDisplay(num){  

    if(!operator){
        firstNumber += num;
        displayBox.textContent = firstNumber
    }else{
        secondNumber += num;
        displayBox.textContent = secondNumber
    }
}

function setOperator(str){
    if (firstNumber === "") return;
    if(operator){
        equals();
    }
    operator = str;
};

function equals(){
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    
    if (operator && !isNaN(num1) && !isNaN(num2)) {
            const result = operate(operator, num1, num2);
            displayBox.textContent = result.toFixed(2).replace(/\.00$/, '');

            firstNumber = result.toFixed(2).replace(/\.00$/, '');
            secondNumber = "";
            operator = "";
    }
    else{
        displayBox.textContent = "Error!"
    }
}

function clearDisplay(){
    displayBox.textContent = 0;
    firstNumber = "";
    secondNumber = "";
    operator = "";
}
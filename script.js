const buttons = document.querySelectorAll('.button-container button');
const numbers = document.querySelectorAll('.number');
const displayContent = document.querySelector('.display-content');
const funcButtons = document.querySelectorAll('.func');
const point = document.querySelector('.point')

function add(a, b) {
    return Math.round((+a + +b)*100000)/100000;
}

function subtract(a, b) {
    return Math.round((+a - +b)*100000)/100000;
}

function multiply(a, b) {
    return Math.round((+a * +b)*100000)/100000;
}

function divide(a , b) {
    return Math.round((+a / +b)*100000)/100000;
}


function operate(operator, operandA, operandB) {
    if (operator === '+') {
        return add(operandA, operandB);
    } else if (operator === '-') {
        return subtract(operandA, operandB);
    } else if (operator === '*') {
        return multiply(operandA, operandB);
    } else if (operator === '/') {
        return divide(operandA, operandB);
    } else return 
}

let list = [];
let first = '';
let result;

function displayValue(value) {
    displayContent.innerText = value
}

function clearText() {
    first = '';
}

function clearValues() {
    result = 0;
    first = '';
    list = [];
}

buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (button.classList[0] == 'number' && first.length < 14) {
            first += button.innerText
            displayValue(first)
            console.log(first)
        } else if (button.classList[1] == 'lul') {
            if (list.length == 0 && !result) {
                list.push(first, button.innerText)
                console.log('here')
                clearText()
                displayValue(first)
                console.log(list)
            } else if(result && list.length == 0) {
                list.push(result, button.innerText)
                console.log("midddleee")
                console.log(list)
            } else {
                if (first) {
                    result = operate(list.pop(), list.pop(), first)
                    list.push(result, button.innerText)
                    displayValue(result)
                    clearText()
                    console.log('doown')
                    console.log(list)

                } else {
                    list[1] = button.innerText
                    console.log('broooo')
                    console.log(list)
                }
            }
        } else if (event.target.innerText == 'AC') {
            clearValues()
            displayValue(first)
        } else if (event.target.innerText == '=') {
            if (list.length > 0) {
                result = operate(list.pop(), list.pop(), first)
                displayValue(result)
                clearText()
            } else console.log('returrrn')
        } else if (event.target.innerText == '0' && first.length < 14) {
            if (displayContent.innerText) {
                first += '0';
                displayValue(first)
            }
        } else if (event.target.innerText == '.') {
            if (!displayContent.innerText) {
                first = '0.'
                displayValue(first)
            } else if (first.includes('.')) {
                console.log('return')
                return
            } else {
                if (result) {
                    first += '0.'
                    displayValue(first)
                    console.log("incddddd")
                } else {
                    first += '.'
                    displayValue(first)
                    console.log("adfaaaaaaa")
                }
            }
        } else if (event.target.innerText == '+/-') {
            if (Math.sign(first) == -1) {
                first = Math.abs(first)
                displayValue(first)
                console.log('mere')
                console.log(first)
            } else if (Math.sign(result) == -1 && !first) {
                if (list.length > 0) {
                    result = Math.abs(result)
                    list[0] = result
                    displayValue(result)
                    console.log('jere22222222', list)
                    console.log(result)
                } else {
                    result = Math.abs(result)
                    displayValue(result)
                    console.log('jere')
                    console.log(result)
                }
            } else {
                if (Math.sign(result) == 1) {
                    if (list.length > 0) {
                        result = '-' + result
                        list[0] = result
                        console.log('hyeeee222222', list)
                        displayValue(result) 
                    } else {
                        result = '-' + result
                        // list[0] = result
                        console.log('hyeeee', list)
                        displayValue(result) 
                    }
                } else if (Math.sign(first) == 1) {
                    first = '-' + first
                    console.log('lllllaaaaaaa')
                    displayValue(first)
                    console.log(first)
                }
            }
        } else if (event.target.innerText == '%') {
            if (result) {
                result = result / 100
                displayValue(result)
            } else if (first) {
                first = first / 100;
                displayValue(first)
            }
        }
    })
})
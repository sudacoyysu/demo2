let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function inputNumber(num) {
    currentInput += num;
    display.innerText = currentInput;
}

function inputOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        default:
            return;
    }
    display.innerText = result;
    currentInput = result.toString();
    previousInput = '';
    operator = null;
}

function clearAll() {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.innerText = '0';
}

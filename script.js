let display = document.getElementById('display');
let displayValue = '';

function appendNumber(number) {
    if (displayValue === '0' && number !== '.') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.innerText = '0';
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        display.innerText = displayValue;
    } catch {
        display.innerText = 'Error';
        displayValue = '';
    }
}

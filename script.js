let display = document.getElementById('display');


function appendNumber(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deletelast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);    
    } catch {
        display.value = 'Error';
    }
}
// Add your JavaScript here
const buttons = document.querySelectorAll('.button');
const input = document.querySelector('.display');

function createCalculator(input) {
    let currentInput = '';

    function displayNumber(number) {
        currentInput += number;
    }

    function clearInput() {
        currentInput = '';
    }

    function deleteLastInput() {
        currentInput = currentInput.slice(0, -1);
    }

    function equalsTo() {
        currentInput = eval(currentInput);
    }

    function evaluatePercentage() {
        currentInput = (parseFloat(currentInput) / 100).toString();
    }

    function showValue() {
        input.value = currentInput;
    }

    return {
        displayNumber,
        clearInput,
        deleteLastInput,
        equalsTo,
        evaluatePercentage,
        showValue
    };
}

const calculator = createCalculator(input);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === 'AC') {
            calculator.clearInput();
        } else if (buttonText === 'DEL') {
            calculator.deleteLastInput();
        } else if (buttonText === '=') {
            calculator.equalsTo();
        } else if (buttonText === '%') {
            calculator.evaluatePercentage();
        } else {
            calculator.displayNumber(buttonText);
        }

        calculator.showValue();
    });
});

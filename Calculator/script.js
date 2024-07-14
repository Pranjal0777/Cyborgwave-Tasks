const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '=') {
            try {
                currentInput = eval(currentInput);
            } catch (error) {
                currentInput = 'Error';
            }
        } else if (button.value === 'clear') {
            currentInput = '';
        } else {
            currentInput += button.value;
        }
        display.value = currentInput;
    });
});

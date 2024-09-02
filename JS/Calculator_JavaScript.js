document.addEventListener('DOMContentLoaded', () => {
    const calculator = {
        display_value: '0',
        first_operand: null,
        wait_second_operand: false,
        operator: null,
    };

    function input_digit(digit) {
        console.log("Digit pressed:", digit);
        const { display_value, wait_second_operand } = calculator;
        if (wait_second_operand === true) {
            calculator.display_value = digit;
            calculator.wait_second_operand = false;
        } else {
            calculator.display_value = display_value === '0' ? digit : display_value + digit;
        }
        console.log("Display value:", calculator.display_value);
    }

    function input_decimal(dot) {
        console.log("Decimal pressed");
        if (calculator.wait_second_operand === true) return;
        if (!calculator.display_value.includes(dot)) {
            calculator.display_value += dot;
        }
        console.log("Display value after decimal:", calculator.display_value);
    }

    function handle_operator(next_operator) {
        console.log("Operator pressed:", next_operator);
        const { first_operand, display_value, operator } = calculator;
        const value_of_input = parseFloat(display_value);

        if (operator && calculator.wait_second_operand) {
            calculator.operator = next_operator;
            return;
        }

        if (first_operand == null) {
            calculator.first_operand = value_of_input;
        } else if (operator) {
            const value_now = first_operand || 0;
            let result = perform_calculation[operator](value_now, value_of_input);
            result = Number(result).toFixed(9);
            result = (result * 1).toString();
            calculator.display_value = parseFloat(result);
            calculator.first_operand = parseFloat(result);
        }

        calculator.wait_second_operand = true;
        calculator.operator = next_operator;
        console.log("First operand:", calculator.first_operand);
        console.log("Operator:", calculator.operator);
    }

    const perform_calculation = {
        '/': (first_operand, second_operand) => first_operand / second_operand,
        '*': (first_operand, second_operand) => first_operand * second_operand,
        '+': (first_operand, second_operand) => first_operand + second_operand,
        '-': (first_operand, second_operand) => first_operand - second_operand,
        '=': (first_operand, second_operand) => second_operand
    };

    function calculator_reset() {
        console.log("Reset pressed");
        calculator.display_value = '0';
        calculator.first_operand = null;
        calculator.wait_second_operand = false;
        calculator.operator = null;
        console.log("Calculator reset");
    }

    function update_display() {
        const display = document.querySelector('.calculator-screen');
        if (display) {
            display.value = calculator.display_value;
        } else {
            console.error("Display element not found");
        }
        console.log("Updated display:", calculator.display_value);
    }

    update_display();

    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const { target } = event;
        console.log("Button clicked:", target.value);

        if (!target.matches('button')) {
            return;
        }

        if (target.classList.contains('operator')) {
            handle_operator(target.value);
            update_display();
            return;
        }

        if (target.classList.contains('decimal')) {
            input_decimal(target.value);
            update_display();
            return;
        }

        if (target.classList.contains('all-clear')) {
            calculator_reset();
            update_display();
            return;
        }

        input_digit(target.value);
        update_display();
    });
});

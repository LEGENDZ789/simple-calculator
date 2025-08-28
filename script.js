const inputField = document.getElementById("input-field");
const buttons = document.querySelectorAll("button");

let evaluated = false; // Track if last action was "="

// Math operator check
const isOperator = (char) => ["+", "-", "*", "/", "%"].includes(char);

// Button click event loop
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        // Handle Clear
        if (value === "C") {
            inputField.value = "";
            evaluated = false;

        // Handle Delete
        } else if (value === "D") {
            inputField.value = inputField.value.slice(0, -1);

        // Handle Evaluate
        } else if (value === "=") {
            let expression = inputField.value;

            // Remove trailing operator
            if (expression && isOperator(expression.slice(-1))) {
                expression = expression.slice(0, -1);
            }

            try {
                inputField.value = eval(expression);
                evaluated = true;
            } catch {
                inputField.value = "Error";
                evaluated = false;
            }

        // Handle other buttons
        } else {
            // If last action was evaluation, clear before adding new number
            if (evaluated && !isOperator(value)) {
                inputField.value = "";
                evaluated = false;
            }

            const lastChar = inputField.value.slice(-1);

            // Prevent starting with operator
            if (!inputField.value && isOperator(value)) return;

            // Prevent consecutive operators
            if (isOperator(value) && isOperator(lastChar)) {
                inputField.value = inputField.value.slice(0, -1) + value;
            } else {
                inputField.value += value;
            }

            evaluated = false;
        }
    });
});


//Task1. Sanitize ur code
//a. ensure that after and evaluation, the input field should be cleared when another button with a number is clicked before the number clicked id displayed
//b. ensure that is the operation ends with a mathematical operation, when the = sign is clicked the last math should be removed before the operation is evaluated 
//c. ensure that no math operator is displayed consecutively and it does not begin the operation
//d. add a button that removes the value at every click
//e.first button (d), second button:decimal, Third button:double 0, fourth button:percentage
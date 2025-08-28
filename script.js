// Get input field and all the buttons
const inputField = document.getElementById("input-field");
const buttons = document.querySelectorAll("button");

//Loop through buttons and add click events
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if(value === "C"){
                   //clear input field
                    inputField.value = "";
                            } else if (value === "="){
            try {
                //Evaluate the expression
                inputField.value = eval(inputField.value)
        } catch {
            inputField.value = "Error"
        }
        }else {
            //Add number/operator to display
            inputField.value += value;
        }
    })
})

//Task1. Sanitize ur code
//a. ensure that after and evaluation, the input field should be cleared when another button with a number is clicked before the number clicked id displayed
//b. ensure that is the operation ends with a mathematical operation, when the = sign is clicked the last math should be removed before the operation is evaluated 
//c. ensure that no math operator is displayed consecutively and it does not begin the operation
//d. add a button that removes the value at every click
//e.first button (d), second button:decimal, Third button:double 0, fourth button:percentage
// Declare variables for all elements
const Calculator = {
    plus: document.getElementById("plus"),
    minus: document.getElementById("minus"),
    divide: document.getElementById("divide"),
    multiply: document.getElementById("multiply"),
    zero: document.getElementById("n0"),
    one: document.getElementById("n1"),
    two: document.getElementById("n2"),
    three: document.getElementById("n3"),
    four: document.getElementById("n4"),
    five: document.getElementById("n5"),
    six: document.getElementById("n6"),
    seven: document.getElementById("n7"),
    eight: document.getElementById("n8"),
    nine: document.getElementById("n9"),
    openParentheses: document.getElementById("opening"),
    closingParentheses: document.getElementById("closing")
}

let resultWindow = document.getElementById("result");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

// New variables ("JS-only")
let calculation = "";

// FUNCTIONS
// Concatenate any value of a clicked button to a string -> calculation
function getInput() {
    calculation += this.textContent;
    resultWindow.textContent = calculation;
}

// Calculate according to input when clicking equal
const calculate = () => {
    resultWindow.textContent = eval(calculation);

};


// Listen to events
for (element in Calculator) {
    Calculator[element].addEventListener("click", getInput);
}

equals.addEventListener("click", calculate);

clear.addEventListener("click", () => {
        calculation = "";
        resultWindow.textContent = "";

    }

);

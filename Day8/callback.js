// Higher Order Function
function calculate(num1, num2, operation) {
	return operation(num1, num2);
}

// Callback Functions
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

// Using the higher order function with callback functions
let result1 = calculate(5, 3, add);
let result2 = calculate(5, 3, subtract);

console.log("Addition: ", result1);
console.log("Subtraction: ", result2);

// Functions

// Defining a function
function greet() {
	console.log("Hello, welcome to the world of functions");
}
// Calling a function
greet();

// 2 Ways to Write a Function
// 1. Function Declaration
function squareDeclaration(num) {
	return num * num;
}

// 2. Function expression
// anonymous function
const squareExpression = function (num) {
	return num * num;
};

console.log("Square for Function declaration: ", squareDeclaration(5));
console.log("Square for Function expression: ", squareExpression(6));

// Function Hoisting
sayHello();

function sayHello() {
	console.log("Hello, function hoisting");
}

helloAnonymous();

const helloAnonymous = function () {
	console.log("Hoisting");
};

//Arrow Functions
const greet = () => console.log("Hello OneCoder");

greet();

const square = (a) => console.log("Square: ", a * a);

square(5);

//Template literals
let name = "Abbi";
let age = 25;

// console.log("I'm " + name + "and I am "+ age + " years old");

console.log(`Hi! I'm ${name} and I am ${age} years old.`);

//desctructuring
//array
let nums = [1, 2, 3];

let [first, second, third] = nums;
console.log(`${first}, ${second}, ${third}`);

//objects
const numbers = {
	firstNum: 4,
	secondNum: 5,
	thirdNum: 6,
};

let { firstNum, secondNum, thirdNum } = numbers;
console.log(firstNum, secondNum, thirdNum);

/* var person = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log('Hello!');
    }
} */

//Enhanced Object Literals
const person = {
	name: "John",
	age,
	greet() {
		return `Hi! I'm ${this.name} and I am ${age} years old.`;
	},
};

console.log(person.greet());

//Spread and Rest
//Spread

function sum(x, y, z) {
	return x + y + z;
}

const numbersArr = [13, 23, 24];
console.log(sum(...numbersArr));

//Rest
function myFunction(firstArg, secondArg, ...restOfArgs) {
	console.log("First value: ", firstArg);
	console.log("Second value: ", secondArg);
	console.log("Rest of the values: ", restOfArgs);
}

myFunction("one", "two", "three", "four");

//Default parameters
function multiply(a, b = 5) {
	return a * b;
}

console.log(multiply(8));
console.log(multiply(8, 10));

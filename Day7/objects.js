// Object Literal

// 1. Creat an object literal representing a person
const person = {
	// 2. Added properties
	firstName: "John",
	lastName: "Doe",
	age: 25,
	hobbies: ["reading", "coding", "eating"],
	// 3. Adding a method
	greet: function () {
		console.log("Hello, my name is " + person.firstName + " " + this.lastName);
	},
};

// 4. Accessing object properties
console.log(person.firstName);
console.log(person.age);
person.greet();

// 5. Modifying object properties
person.lastName = "Smith";
console.log(person.lastName);

// 6. Adding new properties
person.nationality = "American";
console.log(person.nationality);

// 7. Adding new methods
person.introduce = function () {
	console.log("I am " + person.firstName + " " + person.lastName + ".");
};
person.introduce();

// 8. Nesting objects
const address = {
	street: "123 Main St",
	city: "New York",
	country: "USA",
};

person.address = address;
console.log(person.address.street);

// 9. Using object destructuring to extract properties
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

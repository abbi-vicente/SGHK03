//create an array
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);

//accessing elements
console.log("First fruit: ", fruits[0]);
console.log("Third fruit: ", fruits[2]);
console.log("Last fruit: ", fruits[fruits.length - 1]);

//modifying arrays
fruits[1] = "grapes";
console.log(fruits);
fruits.push("strawberry");
console.log(fruits);
fruits.pop();
console.log(fruits);

//iteration
let vegetables = ["cabbage", "carrot", "cucumber", "tomato"];

for (let i = 0; i < vegetables.length; i++) {
	console.log("Vegetable: ", vegetables[i]);
}

let colors = ["red", "blue", "green", "yellow"];
colors.forEach(function (color) {
	console.log("Color: ", color);
});

//Common array methods
//length
console.log("Array length: ", colors.length);

//indexOf
console.log("Index of green: ", colors.indexOf("green"));

//includes
console.log("Includes yellow: ", colors.includes("yellow"));
console.log("Includes violet: ", colors.includes("violet"));

//join
console.log("Joined array: ", colors.join("-"));

//slice
let slicedArray = colors.slice(1, 3);
console.log("Sliced Array: ", slicedArray);
console.log("Colors array: ", colors);

//splice
let removedElements = colors.splice(1, 2);
console.log("Spliced Array: ", removedElements);
console.log("New Colors array: ", colors);

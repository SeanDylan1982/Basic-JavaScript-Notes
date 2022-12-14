// Iterate with while loops
// var myArray = [];
// var i = 0;

// while(i < 5) {
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);

// Iterate with For Loops
// var ourArray = [];

// for (var i = 0; i < 5; i++) {
//   ourArray.push(i);
// }

// console.log(ourArray);

// var myArray = [];

// for (var i = 1; i < 6; i++) {
//   myArray.push(i);
// }

// console.log(myArray);

// Iterate odd numbers with a for loop
// var ourArray = [];
// for (var i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// };
// console.log(ourArray);

// var myArray = [];
// for (var i = 1; i < 10; i += 2) {
//   myArray.push(i);
// };
// console.log(myArray);

// Count backwards with a For Loop
// var ourArray = [];

// for (var i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }
// console.log(ourArray);

// Countdown timer
// var ourArray = [];

// for (var i = 10; i > 0; i--) {
//   ourArray.push(i);
// }
// console.log(ourArray);

// var myArray = [];
// for (var i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }

// console.log(myArray);

// Iterate through an array with a For Loop
// var ourArr = [ 9, 10, 11, 12];
// var ourTotal = 0;

// for (var i = 0; i < ourArr.length; i++) {
//   ourTotal += ourArr[i];
// }

// console.log(ourTotal);

// var myArr = [ 2, 3, 4, 5, 6];
// var total = 0;

// for (var i = 0;i < myArr.length; i++) {
//   total += myArr[i];
// }

// console.log(total);

// Nesting For Loops
// function multiplyAll(arr) {
//   var product = 1;

//   for ( var i = 0; i < arr.length; i++ ) {
//     for ( var j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j]
//     }
//   }
  
//   return product;
// }

// var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

// console.log(product);

// Iterate with Do...While Loops
// var myArray = [];
// var i = 10;

// do {
//   myArray.push(i);
//   i++;
// } while (i < 5) 

// console.log(i, myArray);

// Profile Lookup
// var contacts = [
//   {
//     "firstName": "Akira",
//     "lastName": "Laine",
//     "number": "054328784864",
//     "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//     "firstName": "Harry",
//     "lastName": "Potter",
//     "number": "0449984515314",
//     "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//     "firstName": "Sherlock",
//     "lastName": "Holmes",
//     "number": "7210900464",
//     "likes": ["Intriguing Cases", "violin"]
//   },
//   {
//     "firstName": "Kristian",
//     "lastName": "Vos",
//     "number": "unknown",
//     "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];

// function lookUpProfile(name, prop) {
//   for (var i = 0; i < contacts.length; i++) {
//     if(contacts[i].firstName === name) {
//       return contacts[i][prop] || "No such property";
//     }
//   }
//   return "No such contact"
// }

// var data = lookUpProfile("Sherlock", "hello");

// console.log(data);

// Generate Random Fractions
// function randomFraction() {
//   return Math.random();
// }

// console.log(randomFraction);

// Generate Random Whole Numbers
// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomWholeNum() {

//   return Math.floor(Math.random() * 10);
// }

// console.log(randomWholeNum);
// console.log(randomNumberBetween0and19);

// Generate Random Whole Numbers within a range
// function ourRandomRange(ourMin, ourMax) {
//   return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }
// ourRandomRange(1, 9);

// console.log(ourRandomRange);

// function randomRange(myMin, myMax) {

//   return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
// }

// var myRandom = randomRange(5, 15);

// console.log(myRandom);

// Use the ParseInt Function
// function convertToInteger(str) {
//   return parseInt(str);
// }
// convertToInteger("56");
// console.log(convertToInteger);

//Use the ParseInt Function with a Radix
// function convertToInteger(str) {
//   return parseInt(str, 2)
// }
// convertToInteger("10011");

// Use the Conditional/Ternary Operator
// condition ? statement-if-true : statement-if-false;

// function checkEqual(a, b) {
//   return a === b ? true : false
// }

// console.log(checkEqual(1, 1));

// Use multiple Conditional/Ternary Operators
// function checkSign(num) {
//   return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
// }

// console.log(checkSign(0));

// Differences Between Var and Let keywords
// let catName = "Quincy";
// let quote;

// catName = "Beau";

// console.log(catName);

// function catTalk() {
// Use strict specifies that strict mode must be adhered to with all code within it's scope to avoid errors
//   "use strict";

//   catName = "Oliver";
//   quote = catName + " says Meow!";
// }

// console.log(catTalk());

// Compare scopes of the var and let keywords
// function checkScope() {
//   "use strict";

//   let i = "function scope";
//   if (true) {
//     let i = "block scope";
//     console.log("block scope i is: ", i);
//   }
//   console.log("Function scope i is: ", i);
//   return i;
// }

// checkScope()

// Declare a Read-Only variable with the const keyword
// function printManayTimes(str) {
//   "use strict";
// const can never be reassigned to be any other value than what was originally declared
// It's common practice (or it may have been at some stage but seems less prevelant as time progresses) to declare const variables with ALL CAPS
//   const SENTENCE = str + " is cool!";

//   for (let i = 0; i < str.length; i+=2) {
//     console.log(SENTENCE);
//   }


// }

// printManayTimes("freeCodeCamp");

// Mutate an array declared with const
// const s = [5,7,2,];
// function editInPlace() {
//   "use strict";

  // Reassigning the value of the array won't work because it was declared with const
  // But Appending and Removing items from the array until it's reflects the required values is possible
  // s = [2,5,7];

//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;

// }

// editInPlace();

// console.log(s);

// Prevent Object Mutation - TO ENSURE that a variable DOES NOT CHANGE AT ALL!!!
// function freezeObj() {
//   "use strict"; 
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
// This locks the variable
//   Object.freeze(MATH_CONSTANTS);

//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch( ex ) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();

// console.log(PI);

// Use arrow functions to write concise anonymous functions
// Anonymouse functions are just nameless
// var magic = function() {
//   return new Date();
// };

// will be:

// const magic = () => new Date();

// console.log(magic);

//Write arrow functions with parameters
// const myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };
// console.log(myConcat([1, 2], [3, 4, 5]));

// Converted to an arrow function
// So you're only using the arguments and the value(s) you're looking for
// var myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]));

// Write higher order arrow functions
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// const squareList = (arr) => {
//   const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0 ).map(x => x * x);
//   return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// const increment = (function() {
//   return function incremement(number, value = 1) {
//     return number + value;
//   };
// })();
// console.log(increment(5, 2));
// console.log(increment(5));

// Use the rest operator with Function Parameters
// const sum = (function() {
//   return function sum(x, y, z) {
//     const args = [ x, y, z ];
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3));

// Rest ... Operator
// With the above declaration of the variable args as a 3 item array, that's all it can be in this context
// With the below rest operator ... you can keep adding to the list as long is it gets called
// const sum = (function() {
//   return function sum(...args) {
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3, 4, 5));

// Use the spread operator to evaluate arrays in-place
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//   arr2 = [...arr1];
//   arr1[0] = 'potato'
// })();
// console.log(arr1);
// console.log(arr2);

// Use Desctructuring Assignment to Assign Variables from Objects
// var voxel = {x: 3.6, y: 7.4, z: 6.54};
// Old way - write them all out individually
// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;
// Destructuring way
// const { x : a, y : b, z : c } = voxel; // This is assigning the value of x to a, the value of y to b and the value of z to c

// const AVG_TEMPERATURES = {
//   today: 77.5,
//   tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures) {
//   "use strict";
//   const { tomorrow : tempOfTomorrow } = avgTemperatures;
//   return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// Destructuring Assignment with Nested Objects
// const LOCAL_FORECAST = {
//   today: { min: 72, max: 83 },
//   tomorrow: { min: 73.3, max: 84.6 }
// };

// function getMaxOfTmrw(forecast) {
//   "use strict";

//   const { tomorrow : { max : maxOfTomorrow}} = forecast;

//   return maxOfTomorrow;
// };

// console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Use Desctructuring Assignment to assign variables from arrays
// They just get assigned in order but you can skip items with a blank entry and comma
// const [z, x, , y] = [1, 2, 3, 4, 5, 6];
// console.log(z, x, y);

// let a = 8, b = 6;
// (() => {
//   "use strict";
//   [a, b] = [b, a];
// })();
// console.log(a);
// console.log(b);

// Use Destructuring Assignment with the rest... operator
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {

//   const [ , , ...arr] = list;

//   return arr;
// }

// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

// Use Destructuring Assignment to Pass an Object as a Functions parameter
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
// const half = (function() {
//   return function half({ max, min }) {
//     return( max + min) / 2.0;
//   };
// })();
// console.log(stats);
// console.log(half(stats));

// Create Strings using Template Literals (Use back ticks `` terminal keys)
// const person = {
//   name: "Zodiac Hasabro",
//   age: 56
// };

// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// console.log(greeting);

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   const resultDisplayArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
//   }

//   return resultDisplayArray;
// }
// makeList(result.failure) should return:
// [
// `<li class="text-warning">no-var</li>`,
// `<li class="text-warning">var-on-top</li>`,
// `<li class="text-warning">linebreak</li>`
// ]

// const resultDisplayArray = makeList(result.failure);

// console.log(resultDisplayArray);

// Write concise Object Literal declarations using simple fields
// const createPerson = (name, age, gender) => {

//   return {
//     name: name,
//     age: age,
//     gender: gender
//   };

// };
// console.log(createPerson("Zodiac Hasabro", 56, "male"));

// const createPerson = (name, age, gender) => ( { name, age, gender })
// console.log(createPerson("Zodiac Hasabro", 56, "male"));

// Write concise declarative functions
// const bicycle = {
//   gear: 2,
//   setGear: function(newGear) {
//     "use strict";
//     this.gear = newGear;
//   }
// };

// bicycle.setGear(3);
// console.log(bicycle.gear);

// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     "use strict";
//     this.gear = newGear;
//   }
// };

// bicycle.setGear(3);
// console.log(bicycle.gear);

// Use class syntax to define a constructor function
// This is the original way of creating classes
// var SpaceShuttle = function(targetPlanet) {
//   this.targetPlanet = targetPlanet;
// }
// Create whole new classes of objects with the "new" keyword - classes are Capitalized
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet);
// class SpaceShuttle {
//   constructor(targetPlanet) {
//   this.targetPlanet = targetPlanet;
//   }
// };
// Create whole new classes of objects with the new keyword - classes are Capitalized
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet);

// function makeClass() {
//   class Vegetable {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   return Vegetable;
// }

// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);

// Use Getters and Setters to control access to an object
// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // Getter
//   get writer() {
//     return this._author;
//   }
//   // Setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }

// function makeClass() {
// class Thermostat {
//   constructor(temp) {
//     this._temp = 5/9 * (temp - 32);
//   }
//   get temperature() {
//     return this._temp;
//   }
//   set temperature(updatedTemp) {
//     this._temp = updatedTemp;
//   }
// }
//   return Thermostat;
// }

// const Thermostat = makeClass();
// const thermos = new Thermostat(76);
// let temp = thermos.temperature;
// thermos.temperature = 26;
// temp = thermos.temperature;
// console.log(temp);

// Understanding the difference between Import and Require
// Export/Import between files within the same project/workspace to reference functions etc
// /* export/import */ const capitalizeString = str => str.toUpperCase(); (in app.js)
// import { capitalizeString } from "./app.js"
// const cap = capitilizeString("hello!");

// console.log(cap);

// Use Export to Reuse a Code Block
// const capitalizeString = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// export { capitalizeString };

// export const foo = "bar";
// export const bar = "foo";

// Use * to Import Everything from a file (Import/Export declarations must be made at the top of the page)
// import * as capitalizedStrings from "app.js";

// Create an Export Fallback with Export default
// export default function subtract(x,y) {return x - y;}

// Import a default Export - no {}
// import substract from "math_functions"

// subtract(7,4);

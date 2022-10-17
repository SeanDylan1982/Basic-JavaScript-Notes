//  var number = 5; //  Comments - Single line
/*  Comments
    multi-line */

//  number = 9;

// Data types and variales:
// Data Types: undefined, null, boolean, string, symbol, number and object
//  Variables: labelled boxes var, let, const

// var - used globally
// let - only used within the scope (function) it was declared
// const - cannot be changed

// var myName = "Sean";

// console.log(myName);

// myName = 8;

// Assignment operator "="

// declaring a variable creates it in memory
// var a;
// assigning a value to a variable either already stored in memory or created at the time
// var b = 2;

// a = 7;

// b = a;
// console.log(a, b);

// initializing a variable
// var a = 9;

// uninitialized variable:
// var a = 5;
// var b = 10;
// var c = "I am a...";

// a = a + 1;
// b = b + 5;
// c = c + " String!";

// This assignment method is called compound assignment with augmented operations: ie *=, /=, etc
// Works the same for all arithmatic operators: + - * / %
// a += 1;
// b += 5;
// c += " See!";

// console.log(a, b, c);

// Case sensitivity:
// variables are case sensitive!
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// console.log(studlyCapVar, properCamelCase, titleCaseOver);

// Adding numbers:
// var add = 10 + 12;
// console.log(add);

// Subtracting numbers:
// var minus = 12 - 2;
// console.log(minus);

// Multiplying numbers:
// var multiply = 10 * 12;
// console.log(multiply);

// Dividing numbers:
// var divide = 12 / 2;
// console.log(divide);

// Finding remainder numbers:
// var modulus = 12 % 5;
// console.log(modulus);

// Incrementing Numbers:
// var myNum = 87;
// myNum++;
// console.log(myNum);

// Decrementing numbers:
// var newNum = 99;
// newNum--;
// console.log(newNum);

// Decimal numbers: (Floating point, floats, etc) Decimal point numbers are treated the same as whole numbers.
// var myDecimal = 5.7;
// var newDecimal = 0.0572;

// myDecimal += newDecimal;
// console.log(myDecimal);

// var difference = 7.7385 - 2.259775;
// console.log(difference);

// var product = 4.67 * 7.98;
// console.log(product);

// var quotient = 7384.677 / 28.578;
// console.log(quotient);

// String Variables
// var myString = "I'm a String!";
// var name = `Sean`;
// var surname = 'Patterson';
// console.log(myString, name, surname);

// Escape characters
// \ escape character for quotes
// \' single quote
// \" double quote
// \\ escape + backslash
// \t escape + tab
// \n escape + new line
// \r escape + carriage return
// \b escape + backspace
// \f escape + form feed
// `` use back ticks to quote code blocks to avoid using escape characters

// var myEscapeString = "First-line\n\t\\Second-Line\nThird-Line.";
// console.log(myEscapeString);

// Concatenating Strings with the + operator
// var myConcatString = "hello... " + "Hello, ";
// var newConcatString = "World!" + " You there?";

// myConcatString += newConcatString;
// console.log(myConcatString);

// var userName = "Sean";
// var userLocation = "Benoni"
// var welcomeString = "Hello " + userName + ", how is " + userLocation + " today?"
// console.log(welcomeString);

// Appending variables to strings
// var anAdjective = "AWESOME!";
// var aString = "freeCodeCamp.org is ";
// aString += anAdjective;
// console.log(aString);

// Find the length of a string
// var firstNameLength = 0;
// var firstName = "Sean";

// firstNameLength = firstName.length;
// console.log(firstName, firstNameLength);

// var middleNameLength = 0;
// var middleName = "Dylan";

// middleNameLength = middleName.length;
// console.log(middleName, middleNameLength);

// let secondNameLength = 0;
// let secondName = "Patterson";

// secondNameLength = secondName.length;
// console.log(secondName, secondNameLength);

// Bracket notation to find specific indexes in a string
// 0 based indexing starts at 0 instead of 1 and the last index is .length -1
// Use bracket notation to get nth number in a string or nth to last character

// var firstLetterOfFirstName = "";
// var firstName = "Sean";

// firstLetterOfFirstName = firstName[0];
// console.log(firstLetterOfFirstName, firstName);

// secondLetterOfFirstName = firstName[1];
// console.log(secondLetterOfFirstName, firstName);

// var lastLetterOfFirstName = "";
// var firstName = "Sean";
// lastLetterOfFirstName = firstName[firstName.length -1];
// console.log(lastLetterOfFirstName, firstName);

// String immutabiliy
// Whole strings can be replaced but not individual characters within a string - All or nothing!

// var myString = "Jello, World!";
// console.log(myString);
// var myString = "hello, World!";
// console.log(myString);

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//   var result = "";
//   result += "My " + myAdjective + ", clumsy " + myNoun + " jumped up and " + myVerb + " away, so " + myAdverb;
//   return result;
// }
// wordBlanks("cat", "little", "sprinted", "speedily");
// console.log(wordBlanks("cat", "little", "sprinted", "speedily"));

// wordBlanks("girl", "old", "arrived", "smartly");
// console.log(wordBlanks("dog", "big", "ran", "quickly"));

// Arrays
// var ourArray = ["John", 23];
// var myArray = ["Quincy", 1];
// console.log(ourArray, myArray);

// Nested Arrays
// var ourNewArray = [["the universe", 42], ["everything", 101010]];
// var myNewArray = [["Sean", 100], ["Best", 1]];
// console.log(ourNewArray, myNewArray);

// Using bracket notation to target specific indexes
// var ourNewArray = [["the universe", 42], ["everything", 101010]];
// var myNewArray = [["Sean", 100], ["Best", 1]];
// console.log(ourNewArray[1][1], myNewArray[0][0]);

// Modifying Data in arrays with bracket notation
// var ourArray = [18, 64, 99];
// console.log(ourArray[1]);
// ourArray[1] = 45;
// console.log(ourArray[1]);

// var myArray = [18, 64, 99];
// console.log(myArray);
// This changes the value of the data at index position 2 in the myArray array
// myArray[2] = 11;
// console.log(myArray);
// This adds a new item to the myArray array at index position 3 as no value is currently stored at index position 3 a new array index is created
// myArray[3] = 11;
// console.log(myArray);
// This adds a new item to the myArray array at index position 4 as no value is currently stored at index position 4 a new array index is created
// By doing this, you skip over index position 3 but JS still has to allocate a point in memory for the value of index position 3 even although it contains no data/value, it console.logs to display indexes 0-2, position 3 is noted as an empty item slot, index position 4 is the now created and assigned value of 11
// myArray[4] = 11;
// console.log(myArray);

// Accessing multi dimensional arrays
// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
// var myData = myArray[3][0];
// console.log(myArray, myData);

// Append data to the end of an aray with push (add an item to the end of the array)
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy", "joy"]);
// console.log(ourArray);

// var myNewArray = [["John", 23], ["cat", 2]];
// myNewArray.push(["Reg", 42]);
// console.log(myNewArray);

// Removing the last item from arrays with .pop()
// var ourArray = [1,2,3];
// Removing an item and storing it's value - Declare the variable, then assign it to the value of the .pop() in this case 3
// var removedFromOurArray = ourArray.pop();
// console.log(ourArray, removedFromOurArray);
// Removing an item and storing it's value - Declare the variable removedFromMyArray then assign it to the value of the .pop() in this case the nested array ["cat", 2]
// var myArray = [["John", 23], ["cat", 2]];
// var removedFromMyArray = myArray.pop();
// console.log(myArray, removedFromMyArray);

// Remove the first element from an array with .shift() same as .pop() but for the first item in the targetted array instead of the last
// var ourArray = ["Stimpson", "J", ["cat", 2]];
// var removedFromOurArray = ourArray.shift();
// console.log(ourArray, removedFromOurArray);

// var myArray = [["John", 23], ["dog", 3]];
// var removedFromMyArray = myArray.shift();
// console.log(myArray, removedFromMyArray);

// Adding items to the beginning of arrays with .unshift() same as .push() but for the first item in the targetted array instead of the last
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift(); // This removes "Stimpson" from the first position in the array
// console.log(ourArray);
// ourArray.unshift("Happy"); // This adds "Happy" as the new first element of the array
// console.log(ourArray);

// var myArray = [["John", 23], ["dog", 3]];
// myArray.shift(); // Remove ["John", 23] as the first item in the myArray array
// console.log(myArray);
// myArray.unshift(["cat", 3]); // Add ["cat", 3] as the new first item in the myArray array
// console.log(myArray);

// Working with nested arrays (like a shopping list)
// var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 1]];
// console.log(myList);

// Writing reusable code with functions
// function ourReusableCodeFunction() {
//   console.log("Heyya, World");
// }
// ourReusableCodeFunction();
// ourReusableCodeFunction();
// ourReusableCodeFunction();

// function reusableFunction() {
//   console.log("Hi, World!");
// }
// reusableFunction();

// Passing values to functions with arguments - The parameters specified inside the parentheses ()
// function ourFunctionWithArgs(a, b) {
//   console.log(a -b);
// }
// ourFunctionWithArgs(10, 5); // Outputs the difference of 5 to the console

// function testFunctionWithArgs(a, b, c) {
//   console.log(a + b - c);
// }
// testFunctionWithArgs(100, 5, 80);

// Global scope and functions
// This will always output 10 to the console because it's declared scope is global, no matter where it's called or referenced it will be accessible due to it's globally declared scope
// var myGlobal = 10;

// function fun1() {
   // If the "var" keyword is used to declare this variable it will only have local scope, restricted to work within the function fun1()
//   oopsGlobal = 5;
   // This will output 5 to the console as it's within the scope of the declared variable
//   console.log(oopsGlobal);
// }
    // This will output 5 to the console as it's declared within the fun1() function but without a "var" keyword meaning it becomes globally declared
// console.log(fun1);

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

// fun1();
// fun2();
// console.log(fun1, fun2);

// Local scope and functions
// function myLocalScope() {
//     myVar = 5;
//     console.log(myVar);
// }
// myLocalScope();

// Local and Global Variable with the Same name
// Local variables take precedence over global variables
// var outerWear = "T-Shirt";

// function myOutfit() {
//     var outerWear = "sweater";

//     return outerWear;
// }

// console.log(myOutfit());
// console.log(outerWear);

// Return a value from a function with return
// Return statements can only be made inside functions
// function minusSeven(num) {
//     return num - 7;
// }

// console.log(minusSeven(10));

// function timesFive(num) {
//     return num * 5;
// }
// console.log(timesFive(5));

// Understanding Undefined value returned from a function
// var sum = 0;
// function addThree() {
//     sum += 3;
// }

// console.log(addThree(5));

// function addFive() {
//     sum += 5;
// }

// console.log(addFive(5));

// Assignment with a returned value
// var changed = 0;

// function change(num) {
//     return (num + 5) / 3;
// }

// changed = change(10);

// console.log(changed);

// var processed = 0;

// function processArg(num) {
//     return (num + 3) / 5;
// }
// processed = processArg(7);
// console.log(processed);

// Stand in line
// function nextInLine(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// Boolean values | true/false | On/Off
// function welcomeToBooleans() {
//     return true;
// }
// console.log(welcomeToBooleans());

// Using conditional logic with If statements
// function ourTrueOrFalse(isItTrue) {
//     if (isItTrue) {
//         return "Yes, it's true";
//     }
//     return "No, it's false";
// }

// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//         return "Yes, that was true";
//     }
//     return "No, that was false";
// }

// console.log(trueOrFalse(true));
// console.log(trueOrFalse(false));

// Comparison with the equality operator
// function testEqual(val) {
//     if (val == 12) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testEqual(10));

// Comparison with the Strict equality operator | deeply equal | very equal
// function testStrict(val) {
//     if (val === 10) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testStrict(10));
// console.log(testStrict('10'));

// 3 === 3;
// 3 === '3';

// Practice
// function compareEquality(a, b) {
//     if (a == b) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(compareEquality(10, "10"));

// function compareEqualityNow(a, b) {
//     if (a === b) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(compareEqualityNow(10, "10"));

// Comparison with the Inequality operator
// function testNotEqual(val) {
//     if (val!= 10) {
//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testNotEqual(10));

// function testNotEqualNow(val) {
//     if (val!= 12) {
//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testNotEqualNow(10));

//Comparison with the Strict Inequality operator
// function testStrictNotEqual(val) {

//     if (val !== 10) {

//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testStrictNotEqual(10));

// function testStrictNotEqualNow(val) {

//     if (val !== 12) {

//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testStrictNotEqualNow(10));

// Comparisons with the Logical And Operator
// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100";
//     }

//     if (val > 10) {
//         return "Over 10";
//     }

//     return "10 or Under";
// }

// console.log(testGreaterThan(10));

// Comparison with the Greater Than or Equal To operator >=
// function testGreaterOrEqual(val) {
//     if (val >= 20) {
//         return "20 or Over";
//     }

//     if (val >= 10) {
//         return "10 or Over";
//     }

//     return "Less than 10";
// }

// console.log(testGreaterOrEqual(10));

// Comparison with the Less Than operator <
// function testLessThan(val) {
//     if (val < 25) {
//         return "Under 25";
//     }

//     if (val < 55) {
//         return "Under 55";
//     }

//     return "55 or Over";
// }

// console.log(testLessThan(10));

// Comparison with the Less Than or Equal To operator
// function testLessOrEqual(val) {
//     if (val <= 12) {
//         return "Smaller than or equal to 12";
//     }

//     if (val <= 24) {
//         return "Smaller than or equal to 24";
//     }

//     return "More than 24";
// }

// console.log(testLessOrEqual(10));

// Comparisons with the Logical And Operator
// function testLogicalAnd(val) {

//     if (val < 20) {
//         if (val > 1) {
//             return "Yes";
//         }
//     }

//     return "No";
// }

// console.log(testLogicalAnd(10));

// function testLogicalAnd(val) {
//     if (val <= 50) {
//         if (val >= 25) {
//             return "Yes";
//         }
//     }
//     return "No";
// }

// console.log(testLogicalAnd(10));

// function testLogicalAnd(val) {
//     if (val <= 50 && val >=25) {
//         return "Yes";
//     }
//     return "No";
// }

// console.log(testLogicalAnd(10));

// Comparisons with Logical Or operator
// function testLogicalOr (val) {
//     if (val < 10) {
//         return "Outside";
//     }

//     if (val > 20) {
//         return "Outside";
//     }

//     return "Inside";
// }

// console.log(testLogicalOr(15));

// function testLogicalOrNow (val) {
//     if (val < 10 || val > 20) {
//         return "Outside";
//     }

//     return "Inside";
// }

// console.log(testLogicalOrNow(5));

// Else statements
// function testElse(val) {
//     var result = "";
//     if (val > 5) {
//         result = "Bigger than 5";
//     }
//     if (val <= 5) {
//         result = "5 or Smaller";
//     }
//     return result;
// }

// console.log(testElse(10));
// console.log(testElse(4));

// function testElse(val) {
//     var result = "";
//     if (val > 5) {
//         result = "Bigger than 5";
//     } else {
//         result = "5 or Smaller";
//     }
//     return result;
// }

// console.log(testElse(10));
// console.log(testElse(4));

// Else If statements
// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     }
//     if (val < 5) {
//         return "Smaller than 5";
//     }
//     return "Between 5 and 10";
// }

// console.log(testElseIf(7));
// console.log(testElseIf(12));
// console.log(testElseIf(2));

// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     } else if (val < 5) {
//         return "Smaller than 5";
//     } else {
//     return "Between 5 and 10";
//     }
// }

// console.log(testElseIf(7));
// console.log(testElseIf(12));
// console.log(testElseIf(2));

// Logical order in If Else statements
// function orderMyLogic(val) {
//     if (val < 10) {
//         return "Less than 10";
//     } else if (val < 5) {
//         return "Less than 5";
//     } else {
//         return "Greater than or equal to 10";
//     }
// }

// console.log(orderMyLogic(7));
// console.log(orderMyLogic(2));
// console.log(orderMyLogic(17));

// Once the first condition in an If Else statement has been met the code WILL NOT check for any other conditions!

// function orderMyLogic(val) {
//     if (val < 5) {
//         return "Less than 5";
//     } else if (val < 10) {
//         return "Less than 10";
//     } else {
//         return "Greater than or equal to 10";
//     }
// }

// console.log(orderMyLogic(7));
// console.log(orderMyLogic(2));
// console.log(orderMyLogic(17));

// Chaining If Else statements
// function testSize(num) {
//     if (num < 5) {
//         return "Tiny";
//     } else if (num < 10) {
//         return "Small";
//     } else if (num < 15) {
//         return "Medium";
//     } else if (num < 20) {
//         return "Large";
//     } else if (num >= 20) {
//         return "Huge";
//     } else {
//     return "Change Me";
//     }
// }

// console.log(testSize());
// console.log(testSize(2));
// console.log(testSize(7));
// console.log(testSize(12));
// console.log(testSize(17));
// console.log(testSize(22));

// Golf Code
// var names = [
//     "Hole-in-one!",
//     "Albatross",
//     "Eagle",
//     "Birdie",
//     "Par",
//     "Bogey",
//     "Double Bogey",
//     "Tripple Bogey",
//     "Go Home!"
// ];

// function golfScore(par, strokes) {
//     if (strokes == 1) {
//         return names[0];
//     } else if (strokes == par - 3) {
//         return names[1];
//     } else if (strokes == par - 2) {
//         return names[2];
//     } else if (strokes == par - 1) {
//         return names[3];
//     } else if (strokes == par) {
//         return names[4];
//     } else if (strokes == par + 1) {
//         return names[5];
//     } else if (strokes == par + 2) {
//         return names[6];
//     } else if (strokes == par + 3) {
//         return names[7];
//     } else if (strokes >= par + 4) {
//         return names[8];
//     }
//     return "Change Me!";
// }

// console.log(golfScore(5, 1));
// console.log(golfScore(5, 2));
// console.log(golfScore(5, 3));
// console.log(golfScore(5, 4));
// console.log(golfScore(5, 5));
// console.log(golfScore(5, 6));
// console.log(golfScore(5, 7));
// console.log(golfScore(5, 8));
// console.log(golfScore(5, 9));

// Switch Statements
// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma"
//             break;
//         case 4:
//             answer = "delta"
//     }

//     return answer;
// }

// console.log(caseInSwitch(1));
// console.log(caseInSwitch(2));
// console.log(caseInSwitch(3));
// console.log(caseInSwitch(4));

// Default option in Switch statements
// function switchOfStuff(val) {
//     var answer = "";
//     switch(val){
//         case "a":
//             answer = "apple";
//             break;
//         case "b":
//             answer = "bird";
//             break;
//         case "c":
//             answer = "cat";
//             break;
//         default:
//             answer = "stuff";
//             break;
//     }
//     return answer;
// }

// console.log(switchOfStuff("a"));
// console.log(switchOfStuff("b"));
// console.log(switchOfStuff("c"));
// console.log(switchOfStuff("5"));

// Multiple identical options in Switch statements
// function sequentialSizes(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Mid"
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High"
//             break;
//     }
//     return answer;
// }

// console.log(sequentialSizes(1));
// console.log(sequentialSizes(2));
// console.log(sequentialSizes(3));
// console.log(sequentialSizes(4));
// console.log(sequentialSizes(5));
// console.log(sequentialSizes(6));
// console.log(sequentialSizes(7));
// console.log(sequentialSizes(8));
// console.log(sequentialSizes(9));

// Replacing If Else chains with Switch statements
// function chainToSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case "bob":
//             answer = "Marley"
//             break;
//         case 42:
//             answer = "The Answer!"
//             break;
//         case 1:
//             answer = "There is no #1!"
//             break;
//         case 99:
//             answer = "Missed me by THIS much!"
//             break;
//         case 7:
//             answer = "Ate Nine :O"
//             break;
//     }
    // if (val === "bob") {
    //     answer = "Marley";
    // } else if (val === 42){
    //     answer = "The Answer!";
    // } else if (val === 1) {
    //     answer = "There is no #1!";
    // } else if (val === 99) {
    //     answer = "Missed me by This Much...";
    // } else if (val === 7) {
    //     answer = "Ate Nine";
    // }
//     return answer;
// }

// console.log(chainToSwitch("bob"));
// console.log(chainToSwitch(42));
// console.log(chainToSwitch(1));
// console.log(chainToSwitch(99));
// console.log(chainToSwitch(7));

// Returning Boolean Values from Functions
// function isLess(a, b) {
//     if (a < b) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isLess(10, 15));
// console.log(isLess(15, 10));

// function isLess(a, b) {
//     return a < b;
// }

// console.log(isLess(10, 15));
// console.log(isLess(15, 10));

// Returning early pattern from functions
// function abTest(a, b) {

//     if (a < 0 || b < 0) {
//         return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// console.log(abTest(2, 2));
// console.log(abTest(2, -2));

// Counting cards
// var count = 0;

// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case 'J':
//         case 'Q':
//         case 'K':
//         case 'A':
//             count--;
//             break;
//     }
//     var holdbet = 'hold'
//     if (count > 0) {
//         holdbet = 'bet'
//     }

//     return count + " " + holdbet;
// }

// console.log(cc(2));
// console.log(cc(3));
// console.log(cc(7));
// console.log(cc('J'));
// console.log(cc('A'));

// Build JavaScript Objects
// var ourDog = {
//     'name': "Camper",
//     'legs': 4,
//     'tails': 1,
//     'friends': ["Everything!"]
// };

// console.log(ourDog);

// var myDog = {
//     'name': "Quincy",
//     'legs': 3,
//     'tails': 2,
//     'friends': []
// };

// console.log(myDog);

// Accessing Object porperties with dot.notation
// var testObj = {
//     'hat': "Ballcap",
//     'shirt': "Jersey",
//     'shoes': "Cleats"
// };

// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;

// console.log(hatValue);
// console.log(shirtValue);

// Accessing Object properties with Bracket Notations
// var testObj = {
//     'an entree': "Hamburger",
//     'my side': "Veggies",
//     'the drink': "Water"
// };

// var entreeValue = testObj['an entree'];
// var drinkValue = testObj['the drink'];

// console.log(entreeValue);
// console.log(drinkValue);

// Accessing Object properties with Variables
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };

// var playerNumber = 16;
// var player = testObj[playerNumber];

// console.log(player);

// Updating Object properties
// These key value pairs are return in alphabetical order by default regardless of the order they appear in the code
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["Everything!"]
// };

// ourDog.name = "Happy Camper";
// console.log(ourDog);

// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };

// Add whole new key value pairs on the fly
// myDog.siblings = 3;
// myDog.friends.push("Other Coders", "Other Campers");
// console.log(myDog);

// Add new properties to an Object
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["Everything!"]
// };

// ourDog.bark = "bow-wow";
// console.log(ourDog);

// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["Everything!"]
// };

// ourDog['bark'] = "Woof!";
// console.log(ourDog);

// Delete properties from Objects
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["Everything"],
//     "bark": "bow-wow"
// };
// delete ourDog.bark;
// console.log(ourDog);

// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["Everything"],
//     "bark": "bow-wow"
// };
// delete ourDog.tails;
// console.log(ourDog);

// use an Object instead of a long switch statement or else if chain
// function phoneticLookup(val) {
//     var result = "";
//     var lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxtrot": "Frank"
//     };
//     result = lookup[val];
//     return result;
// }

// console.log(phoneticLookup("charlie"), phoneticLookup("foxtrot"));

// Testing objects for properties
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp) {
//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];
//     } else {
//         return "Not found";
//     }
// };

// console.log(checkObj("gift"), checkObj("pet"), checkObj("bed"), checkObj("Hello"));

// Manipulating complex Objects containing flexible data
// var myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "Gold": true
//     },
//    // Add new records
//     {
//         "artist": "Beau Carnes",
//         "title": "Cereal Man",
//         "release_year": 2003,
//         "formats": [
//             "YouTube video",
//             "Mp3"
//         ]
//     }
// ];

// console.log(myMusic);

// Accessing Nested Objects
// myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "Outside": {
//             "trunk": "jack"
//         }
//     }
// };

// // Use .dot notation when possible as it's quicker and easier to read
// // Use [bracket] notation when property names have spaces which can't be avoided
// var gloveBoxContents = myStorage.car.inside["glove box"];

// console.log(gloveBoxContents);

// Accessing nested arrays
// var myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];

// var secondTree = myPlants[1].list[1];

// console.log(secondTree);

// Record collection
// var collection = {
//     "2548": {
//         "album": "Slippery when wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "Let it rock",
//             "You give love a bad name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little red Corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": []
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// };

// // Keep a copy of the collection in it's original state
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// // console.log(collection);

// function updateRecords(id, prop, value) {
//     if (value === ""){
//         delete collection[id][prop];
//     } else if (prop === "tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     } else {
//         collection[id][prop] = value;
//     }
//     return collection;
// }

// updateRecords(5439, "artist", "ABBA");
// updateRecords(2468, "tracks", "test");
// console.log(collection);


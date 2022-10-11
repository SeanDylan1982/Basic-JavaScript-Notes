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

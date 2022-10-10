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


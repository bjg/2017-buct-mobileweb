// A variable is a location for holding a data item such as a number or a string
// We will first consider scalar variables which are variables that can hold only
// single values

// The ES5 'var' keyword can be used to declare and initilize variables
var aNumber = 10
var aString = "This is a string " + aNumber
//console.log("aString=" + aString)

// In React Native we use the newer ES6 syntax to declare variables instead
// ES6 distinguishes between immutable and mutable variables
// The values of immutable variables, also called constants, cannot be changed once set
const x = 100.0
//console.log("x=" + x)
const name = "Jane Doe"
//console.log("name=" + name)

// It is illegal to reassign a value to a constant
//x = 200.0; // => TypeError: Assignment to constant variable

// It is also illegal to redeclare a variable
//let name = "John" // SyntaxError: Identifier 'name' has already been declared

// A variable's value after declaration but before assignmen is said to be undefined
let notAssigned;
//console.log(notAssigned)

// Constants are a good way of naming well-known numbers in calculatons
const PI = 3.141592653589793;
//console.log("PI=" + PI)

// The built-in typeof operator can query the type of a variable
//console.log(`name is of type ${typeof name}`)
//console.log(`PI is of type ${typeof PI}`)


// PI is already a defined constant in the Javascript Math library
//console.log(Math.PI)

// Values of mutable variables can be changed after they are set.
let y = 200.0;
y = y + 10.0;
//console.log("y=" + y)

let person = "John";
person = person + " Doe"
//console.log("name=" + name)

// Variables and constants can be used in arithmetic expressions
let radius = 10.0;
let area = radius * radius * Math.PI;
let circum = 2 * Math.PI * radius;
//console.log(`radius=${radisu}, area=${area}.  circumerfence=${circum}`)

const rate = 0.05;    // Interest rate (as a percentage)
let principal = 1000; // Amount to be invested
let term = 5;         // Term of investment

// The Javascript Math library gives us an exponentiation function
let amount = principal * Math.pow( (1 + rate), term); // Principal plus componet interest earned after term
//console.log("¥${principal} invested at ${rate * 100}% after ${term} years is ¥${ammout}")


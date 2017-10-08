// Selection means making branching decisions in code, i.e. deciding on which
// statements will execute depending on some condtion

// The if-statement is the basic branching statement in Javascript
let n = 10;
const max = 100;
if (n < max) {
    // Clause which is executed if condition is true
    //console.log(`${n} is less than ${max}!`)
}
// Executed whether true of false
//console.log("Outside the if-statement")

// if-statements can also have an else-clause which is exected with the the condition is false
if (n > max) {
    // Clause which is executed if condition is true
    //console.log(`${n} is less than ${max}!`)
} else {
    // Clause which is executed if condition is false
    //console.log(`${n} is not greater than ${max}!`)
}
// Executed whether true of false
//console.log("Outside the if-else-statement")

// if-statements can be nexted inside other if-statements
const min = 20;
if (n > max) {
    //console.log(`${n} is less than ${max}!`)
    if (n < min) {
        //console.log(`${n} is less than ${min}!`)
    } else {
        //console.log(`${n} is not less than ${min}!`)
    }
} else {
    //console.log(`${n} is not greater than ${max}!`)
}

// if-statements can take on a multiway branch form
const high = 3.0, middle = 2.0, low = 1.0;
let m = 2.14
if (m < low) {
    //console.log(`${m} is less than ${low}!`)
} else if (m < middle) {
    //console.log(`${m} is between than ${low} and ${middle}`)
} else if (m < high) {
    //console.log(`${m} is between than ${middle} and ${high}`)
} else {
    //console.log(`${m} is greater than ${high}`)
}

// Another kind of Javascript multiway branch is the switch-statement
let c = '0'
switch (c) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        //console.log(`${c} is a numeric digit`)
        break;
    default:
        //console.log(`${c} is something else`)
}

// We have to declare and assign a variable based on the value of another variable or expression

// The long way (and obvious wat)
let p;
if (n < min) {
    p = 0;
} else {
    p = 1;
}

// Shorter way using a ternary conditional expression
p = n < min ? 0 : 1
//console.log(`p is ${p}`)

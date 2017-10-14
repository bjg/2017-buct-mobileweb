// A function is a code snippet that can be called by other code or by itself,
// or a variable that refers to the function.

// In ES5 the function keyword can be used to declare a named function

function foo() {
    //console.log("Hello from functon foo()")
}

// A function is called (or invoked) by its name

foo();

// A function does not have to be named in Javascript. Such functions are called anonymous functions
// and are actually more commmon

(function() {
    //console.log("Hello from an ES5 anonymous function")
})();
// The above is an example of an immediately-invoked function expression (or IIFE)

// ES6 introduced a more concise syntax for functions called the fat-arrow syntax which is the
// more common syntax in React Native App development

(() => {
    //console.log("Hello from an ES6 anonymous function")
})();

// Anonyous functons can be assigned to variables

const bar = () => {
    //console.log("Hello from " + bar)
}
bar();

// When a function is called, arguments can be passed to the function as input

const add2Print = (a, b) => {
    //console.log( a + b )   
}
add2Print(1, 2)

// A function can optionally return an output value

const add2Returning = (a, b) => {
    return a + b
}
//console.log(add2Returning(2, 3))

// If the function's return value can be expression as a single expression then we
// drop the block-syntax curly-braces and the return keyword

const add2Concise = (a, b) => a + b
//console.log(add2Concise(3, 4))

// If a function takes only one argument, then the argument parens can be left out

const incr = x => x + 1
//console.log(incr(10))

// Functions can take other functions as arguments

const addAmounts = (start, stop, adder) => {
    for (let i = start; i < stop; i++) {
        //console.log(adder(i))
    }
}
addAmounts(20, 30, incr)

// Functions can also return other functions as outputs. Let's make a function returns a function
// which decrements 1 from its passed arguments

const makeDecr = (delta) =>
    n => n - delta;
const decr1 = makeDecr(1)
//console.log( decr1(2) )

// The function returned by makeDecr is an example of a closure as it closes over the
// value of the argumemt variable delta (which would otherwise go out of scope when makeDecr returns)
// Let's make another function which decrements 10 from its passed argument

const decr10 = makeDecr(10)
//console.log( decr10(20) )

// Javasript functions can also be defined recursively, i.e. they can call themselves

const factLong = n => {
    if (n <= 1) {
        return 1
    }
    return n * factLong(n - 1)
}
console.log( factLong(5) )

// This can be expressed more concisely using a ternary expression the short-form ES6 function syntax

const fact = n => (n <= 1) ? 1 : n * fact(n - 1)

console.log( fact(5) )

// Generators are a special function form which implements what is called lazy-execution
// A generator only computes its next value when it is executed
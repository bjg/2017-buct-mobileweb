// An array is an ordered collection of data (either primitive or object).
// Arrays are used to store multiple values in a single variable.
// This is in contrast to scalar variables that can store only one value.

// An array can be 

// This is an empty array declared with the literal constructor syntax
const empty1 = []

// Or we can create objects using the Array constructor function (which is less-often used)
const empty2 = new Array()

//console.log(empty2)

// In either case, we can provide initial values for one or more entries

const numbers = [1, 2, 3, 4, 5,]

// Each item in an array has a number attached to it, called a numeric index,
// that allows you to access it. In JavaScript, arrays start at index zero and
// can be processed using various methods.

//console.log(numbers[0]) // The first element

// The number of elements in the array is available through the array length property

//console.log(numbers.length)

//console.log(numbers[numbers.length - 1]) // The last element

// We can append new elements to an array with the push method. This alters the existing array

const fruits = ['apple', 'orange', 'banana', 'lemon', 'mango']
fruits.push('watermelon')
//console.log(fruits)

// We can prepend new elements to an array with the unshift method

fruits.unshift('pear')
//console.log(fruits)

// The slice methods on arrays allows us to take sub-arrays using the start and end index

const twoFruits = fruits.slice(1, 3)
//console.log(twoFruits)

// We can make copies of arrays with the slice index

const copyFruits = fruits.slice()

// The new array, copyFruits is a true copy, meaning that array references are not equal
//console.log(fruits === copyFruits)

// But their contents are equal
const arrayEquals = (a1, a2) => {
    if (a1.length !== a2.length) { return false }
    for (let i in a1) {
        if (a2[i] !== a1[i]) { return false }
    }
    return true
}
//console.log( arrayEquals(fruits, copyFruits) )

// Array elements can be removed with the splice method, specifying
// the start index and the size of the element range to be removed

// Remove the first element

fruits.splice(0, 1)
//console.log( fruits )

// Remove the last element
fruits.splice(fruits.length - 1, 1)
//console.log( fruits )

// We can traverse all of the elements of an array using the 'visitor'
// pattern with the forEach() funciton, passing it a function which will
// be called for each element of the array
// The funciton we pass will be given, as arguments, the element value
// array index
fruits.forEach( (elem, index) => {
    //console.log( `fruits[${index}] = ${elem}`)
})

// Arrays can be converted from and to other data types such as strings

const hobbies = "skiing, fencing, pingpong, running, badminton".split(", ")
//console.log( hobbies )
//console.log( hobbies.join(", ") )

const vowels = Array.from('aeiou')
//console.log( vowels )
//console.log( vowels.toString() )

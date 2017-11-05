// Functional programming is most often used on JS Array type,
// especially in React
const colors = [
    'red', 'blue', 'white', 'black', 'indigo', 'violet', 'green'
]

// The forEach() function implements the 'visitor' pattern
let lengths = []
colors.forEach( (col, index) => {
    lengths.push(col.length)
})

console.log(lengths)

// Arrays are functors which means they implement a map() function
// Map returns a new array with the old array's values mapped
// according to some user-defined mapping function
lengths = colors.map( (col) => col.length)

console.log(lengths)

// The reduce function can convert an array to a different type
// depending on the initial seed value and the user-defined
// reducer function

// Reduce can be used to implement many common array operations
const reversed = colors.reduce( (acc, col) => {
    acc.unshift(col)
    return acc
}, [])

console.log(reversed)


const count = colors.reduce( (acc, col) => acc += 1, 0)

console.log(count)

const numbers = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 87
]

const squared = numbers.map( n => n * n)

console.log(squared)

const total = numbers.reduce( (sum, n) => sum += n, 0)

console.log(total)

// Generator functions a function forms which can yield their
// execution to the calling function allowing the caller and called
// functions' execution to be intertwined. This can be useful when
// functions need to generate infinite sequences.
function* fibonacci() {
    let current = 0, next = 1
    while (true) {
        yield current;
        [current, next] = [next, current + next]
    }
}

// We would generate forever unless limited by the caller
const limit = 79
for (let iter = fibonacci(), i = limit; i > 0; i--) {
    // The next fibonacci value is computed when we consume
    // the last - an example of lazy execution
    console.log(iter.next().value)
}
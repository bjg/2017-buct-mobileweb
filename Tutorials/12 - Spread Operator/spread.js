// Recall the objects can be copied with the Object.assign function
const o1 = { fruit1: "apple" }
console.log("Object.assign copy: ", Object.assign({}, o1))

// And merged
const o2 = { fruit2: "pear"}
const o3 = Object.assign({}, o1, o2)
console.log("Object.assign merge: ", o3)

// The ES6 spread operator (three dots) can merge objects using a more intuitive syntax
const o4 = {...o1, ...o2}
console.log("Spread merge: ", o4)

// The spread operator can also be used to add object properties
const o5 = {...o4, friuit3: "watermelon"}
console.log("Spread Add: ", o5)

// The spread operator can also be used to update existing object properties by placing
// the new property values at the end
const o6 = {...o5, fruit3: "banana"}
console.log("Spread Update: ", o6)


const a1 = [1, 2, 3]

// Prepend a value to an array returning a new array
const a2 = [0, ...a1]
console.log("Spread prepend: ", a2)

// Append a value to an array returning a new array
const a3 = [...a2, 4]
console.log("Spread append: ", a3)

// Concatenate two arrays returning a new array
const a4 = [6, 7, 8]
const a5 = [...a3, ...a4]
console.log(a5)

// Insert values into an array returning a new array
const a6 = [...a5.slice(0, 5), 5, ...a5.slice(5)]
console.log(a6)

// The spread operator can also signify so-called rest arguments to functions
// This allows them to be iterables
const foo = (...args) => {
    for (let item of args) {
        console.log(item)
    }
}
foo(1, 2, 3)

// Finally, we can use the spread operator to convery arrays to arumnent lists
// in function calls
foo(...[4, 5, 6])


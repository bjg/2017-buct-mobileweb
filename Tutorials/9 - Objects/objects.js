// Javascript supports a kind of object-oriented programming which is a little different
// from languages like C++ or Java

// Objects are fundamental to Javascript and most things in the language are represented as
// objects underneath

// We can think of objects as containers of named properties or key/value pairs
// This is an empty object declared using the object literal syntax

const empty1 = {}

// Or we can create objects using the Object constructor function

const empty2 = Object.create({})

// In either case, we can provide initial keys and values for one or more properties
// Properties are delimited by a colon and separated by commas
// Object methods can be declared as named functions
// Object properties within object methods are referenced via the 'this' keyword

const person = {
    name: "Bob Smith",
    age: 32,
    gender: 'male',
    bio() {
        return `${this.name} is ${this.age} years old `
    },
    greeting() {
        return `Hi! I'm  + ${this.name}.`
    }
}
// Object properties can be access via the dot (.) notation from outside the object definition

//console.log( person.name )
//console.log( person.bio() )

// Object properties can also be access using the bracket notation. The bracket notation is needed
// when using computed property names or property names which would be illegal in the dot notations

// We can add properties to an object after any initial assignment
person.weight = 80

// So you might ask yourself why, if person is a constant, we can change its properties
// The person constant is a reference to the object instance which means we cannot change it
// But can change its properties
//person = {} // => TypeError: Assignment to constant variable


// Accessing properties using the bracket notation feels very like the array syntax
person['hobbies and interests'] = "skiing, running, chess"
//console.log( person['hobbies and interests'] )

// Properties can be deleted with the delete keyword

delete person.age
// console.log(person)

// We can get the property names (keys) from an object using Object.keys

//console.log( Object.keys(person) )

// And we can iterate over object properties using a special form of the for-loop syntax
// The for-in systax allows us to iterate over the object's property names (keys)

for (let key in person) {
    if (typeof person[key] === 'function') {
        continue
    }
    //console.log (`person[${key}] = '${person[key]}' (which is a ${typeof person[key]})` )
}
// The built-in typeof operator can query object property values. Object property names are always strings

// Javascript functions are objects which can have assigned properties

function foo()  {}
foo.customProp = "my new prop"
for (let key in foo) {
    //console.log (`foo[${key}] = '${foo[key]}' (which is a ${typeof foo[key]})` )
}

// Object properties can be copied using the Object.assign() method
const o1 = { prop1: "val1"}
const copy1 = Object.assign({}, o1)
//console.log(copy1)

// Object properties can be merged, also using Object.assign()

const o2 = { prop2: "val2"}
const o3 = { prop3: "val3"}
const o4 = Object.assign(o1, o2, o3, person)
//console.log( o4 )









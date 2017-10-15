// Javascript is actually a prototypical object system not a classful object system
// In other words, you define object protoypes rather than classes in the C++/Java
// sense of classes

// Functions are objects. Calling a function behaves like an object type constructor
// We can define methods on the function 'protoype' field which can be called from
// object instances created with the 'new' keyword

// Constructor arguments are passed are function arguments
const Plant = function (title) {
    this.title = title;
}
// Instance methods are defined on the 'prototype'
Plant.prototype.setColor = function(color) {
    this.color = color;
}
Plant.prototype.toString = function() {
    // The 'this' keyword 
    return `A ${this.title} has the color ${this.color}`
}
const flower = new Plant("Rose")
flower.setColor("red")

console.log(flower.toString());

// Developers, new to Javascript, often find this syntax convoluted so ES6 introduced
// a more familiar syntax

class Animal {
    constructor(title) {
        this.title = title
    }
    setColor(color) {
        this.color = color
    }
    toString() {
        return `This ${this.title} has the color ${this.color}`
    }
}
const cat = new Animal("Cat")
cat.setColor("white")
console.log(cat.toString());

// However, the Javascript class is just syntax-sugar for prototypal objects
// and not a new class system. But extending objects is easier, including the
// ability to override methods

class Mammal extends Animal {
    constructor(title) {
        super("furry " + title)
    }
    // Method override
    toString() {
        return `This ${this.title} is a mammal`
    }
}
const dog = new Mammal("Dog")
console.log(dog.toString());

// Built-in objects can be extended to create custom versions

class BetterDate extends Date {
    constructor() {
        super();
    }

    getFormattedDate() {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${ this.getFullYear() }-${ months[this.getMonth()] }-${ this.getDate() }`
    }
}

console.log(new BetterDate().getFormattedDate())

// The new ES6 static keyword can be used to declare so-called class methods
class Shape2D {
    static description() {
        return `A ${this.name} is an object in 2-dimensional plane`
    }
}

// The method is called on the class name and not an instance of the class

console.log(Shape2D.description())
// Iteration means executing a statement zero or more times depending on some condition
// This is commonly called looping. Javascript supports the common looping primitives

// The simlest loop form is the while-loop. A while-loop executes a statement block while
// a condition is true

let n = 10
while (n > 0) {
    //console.log(`n=${n}`)
    n -= 1
}

// Javascript supports a do-while statement which also executes a statement block until
// while some some condition is true. The difference is that this always runs at least once

let x = 0;
do {
    x += 1
    //console.log(`x=${x}`)
} while (x < 10)

// The break statement allows you to leave the loop for a condition other than that
// controlled by the loop variable

let m = 10
while (m > 0) {
    //console.log(`m=${m}`)
    if (m === 5) {
        // Leave the loop now
        break
    }
    m -= 1    
}
//console.log(`Left loop when m=${m}`)

// The continue statement allows you to loop earlier than the normal loop flow

let l = 10
while (l > 0) {
    //console.log(`l=${l}`)
    if (l === 6) {
        // Skip when equal to 5
        l -= 2
        continue
    }
    l -= 1    
}

// In general, loop can be said to have three parts
//   1. An loop variable iniitalization
//   2. A check of the loop variable (to see if it should stop) at each iteration
//   3. Incrementing or decrementing the loop variable

// The for-loop generalizes the while-loop by combining all three steps into a single statement

for (let i = 0; i  < 10; i += 1) {
    //console.log(`i=${i}`)    
}

// The break and continue statements are also legal in a for loop
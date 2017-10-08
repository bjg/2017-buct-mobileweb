// Scope has to do with where is the program structre symbols such as
// variable and functions are visible (or accessible) in the code

const blevel0 = "Block-level 0"; // Top-most level

// Block scope means vaiables declared in a block are only visible in
// the block in which they are defined
{
    const blevel1 = "Block-level 1"
    //console.log( blevel0 )
    //console.log( blevel1 )

    // Block-level scoped variables only come into scope after they are
    // declared
    const here = "in scope from here but not before"
}

//console.log( blevel1 ) // =>  ReferenceError: level1 is not defined

// Let variables of for-loops are only defined inside teh loop body

const max = 10;
for (let i = 0; i < max; i++) {
    // i is only available in this block
    //console.log(i)
}
// i is now out of scope but max is still defined

// Different scope rules apply to the older ES5 variables declared
// with the 'var' keyword. The use of let and const are now
// preferred over var

for (var i = 0; i < max; i++) {
    // i is available in this block ...
    //console.log(i)
}
// ... and i is still here!
//console.log(i)

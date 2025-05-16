// This is the initial code using `var` with some issues to fix.

var x = 5; // Variable declaration and initialization
var x = 10; // Redeclaration, works with var but not allowed with let

// console.log(a); // Hoisting example: variable is used before declaration
// var a = 20;
// ^ Refactored:
let a = 20;
console.log(a); // Declare before use

if (true) {
    var z = 30; // Variable declared with var is accessible outside block
}
console.log(z); // Should cause a scoping issue when switched to let/const

// var b = 40; // Variable that changes value
// b = 50; // Should be let, as it changes value
// ^ Refactored:
let b = 40;
b = 50; // Use let because the value changes

// var PI = 3.14; // Declared as a variable but should ideally be a constant
// PI = 3.14159; // This should throw an error when changed to const
// console.log(PI); // works but should not be changing
// ^ Refactored:
const PI = 3.14; // Use const because the value should remain constant
PI = 3.145
console.log(PI); // throws error TypeError: Assignment to constant variable.

// Your task:
// 1. Replace `var` declarations with `let` or `const` as appropriate.
// 2. Resolve issues caused by hoisting, redeclaration, and scoping.
// 3. Ensure the program works correctly after refactoring.

/*
Key Takeaways:

1. var vs let vs const:   
var is function-scoped and allows redeclaration, leading to potential bugs.
let is block-scoped and cannot be redeclared.
const is block-scoped and used for values that should not change.

2. Hoisting:  
Variables declared with var are hoisted and initialized as undefined.
Variables declared with let or const are not accessible before their declaration.

3. Best Practices:  
Use const by default, and use let only when reassignment is necessary.
Avoid using var in modern JavaScript code.
*/
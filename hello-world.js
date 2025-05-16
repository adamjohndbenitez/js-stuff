//aj - prior is to install code runner extension, and will able to run this js code with play button on upper-right of this VSCode
console.log("Hello, World!");

var petDog = 'Rex';
console.log(petDog)
console.log("My pet dog's name is: ", petDog);
var petCat = 'Pepper'
console.log(petCat)
console.log("My pet cat's name is: ", petCat)

// Task 1: Using the logical && operator
var score = 8;
console.log("Mid-level skills:", 0 < score < 10) //aj - alt: score > 0 && score < 10

// Task 2: Using the logical || operator
var timeRemaining = 0
var energy = 10
console.log( "Game over: ", timeRemaining == 0 || energy ==0) //whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.

// Task 3: Using the modulus operator, %, to test if a given number is odd
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// Task 4: Add numbers using the + operator
console.log(5 + 10); // 15

// Task 5: Concatenate numbers and strings using the + operator
var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d); // "Now in 3D!"

// Task 6: Use the += operator to accumulate values in a variable
var counter = 0;
counter += 5;
counter += 3;
console.log(counter); // 8

// 
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else {
   console.log('not retired yet')
}

// 
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 || age >= 18) {
   console.log('Each month you get a salary')
}

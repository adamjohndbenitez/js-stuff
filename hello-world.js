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

// advance operators: if-else statement
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
}

// advance operators: switch statement
var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}

// Function
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")

// datatype using typeof operator
console.log("typeof typeof('what is this?')) "+typeof('what is this?'))
console.log("typeof typeof(10)) "+typeof(10))
console.log("typeof typeof(3.14)) "+typeof(3.14))
console.log("typeof typeof(true)) "+typeof(true))
console.log("typeof typeof(false)) "+typeof(false))
console.log("typeof typeof(false)) "+typeof(1 < 2))
console.log("typeof typeof([1,2,3])) "+typeof([1,2,3]))

console.log("typeof typeof({firstProperty:1})) "+typeof({firstProperty:1}))

// error prevention handling
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")


// array and object
var clothes = [];
clothes.push('gray t-shirt'); // 1st item of clothing
clothes.push('blue t-shirt'); // 2nd item of clothing
clothes.push('yellow t-shirt'); // 3rd item of clothing
clothes.push('slippers'); // 4th item of clothing
clothes.push('old jeans'); // 5th item of clothing
clothes.pop();
clothes.push('green scarf');
console.log(clothes[2]);

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

// Defensive programming
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")
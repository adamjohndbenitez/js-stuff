// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
var diares = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
logDairy = function() { // anonymous unnamed function.
    for (var diary of diares) {
        console.log(diary);
    }
}
logDairy();

// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
const animal = {  
    canJump: true  
};  
const bird = Object.create(animal);  
bird.canFly = true;  
bird.hasFeathers = true;  
function birdCan() {
    for (var b of Object.keys(bird)) {
        console.log(`${b}: ${bird[b]}`);
    }
}
birdCan();

// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
function animalCan() {
    for (const key in bird) {
        // Access the value using bracket notation
        const value = bird[key];
        console.log(`${key}: ${value}`);
    }
}
animalCan();


//The Object.keys(), Object.values(), Object.entries() method
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // [['speed', 400], ['color', 'magenta']]
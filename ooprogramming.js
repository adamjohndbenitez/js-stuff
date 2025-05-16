// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
class Person {
    // WRITE YOUR CODE HERE - Add a constructor with default parameters
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    // WRITE YOUR CODE HERE - Add the sleep() method
    sleep() {
        return this.energy + 10;
    }
    // WRITE YOUR CODE HERE - Add the doSomethingFun() method
    doSomethingFun() {
        return this.energy - 10;
    }
}

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
class Worker extends Person {
    // WRITE YOUR CODE HERE - Add a constructor with additional parameters
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    // WRITE YOUR CODE HERE - Add the goToWork() method
    goToWork() {
        return this.xp + 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    let intern = new Worker("Bob", 21, 110, 0, 10); //1st-way of instantiating the Worker class: A more common method of creating objects from classes is to use the new  keyword. When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.
    
    // WRITE YOUR CODE HERE - Call the goToWork() method
    intern.goToWork();
    // WRITE YOUR CODE HERE - Return the intern object
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
    let manager = Object.create(Worker); //2nd-way of instantiating the Worker class: about Objects is that they exist in a hierarchical structure, meaning that the original base or super class for everything is the Object class, and all objects derive from this class. This allows us to utilize the Object.create() method. to create or instantiate objects of our classes.
    //new Worker("Alice", 30, 120, 100, 30);
    //name, age, energy, xp = 0, hourlyWage = 10
    manager.name = "Alice";
    manager.age = 30;
    manager.energy = 120;
    manager.xp = 100;
    manager.hourlyWage = 30;
    // WRITE YOUR CODE HERE - Call the doSomethingFun() method
    manager.doSomethingFun();
    // WRITE YOUR CODE HERE - Return the manager object
    return manager;
}


//Inheritance - There are one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")
class Animal { /* ...class code here... */ };
class Mammal extends Animal { /* ...class code here... */ };
class Elephant extends Mammal { /* ...class code here... */ };

//Encapsulation - code implementation "hidden" - All I want is to use the methods available to be my dot notation
"abc".toUpperCase();

//Abstraction - make it more generalized when writing code - Abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

//Polymorphism - "multiple forms" / "something that can take on many shapes."
const bicycle = {
    bell: function() {
        return "Ring, ring!! Watch out, please!";
    }
}
const door = {
    bell: function() {
        return "Ring, Ring!~ Come here, please!";
    }
}
console.log(bicycle.bell()); // "Ring, ring!! Watch out, please!"
console.log(door.bell());    // "Ring, Ring!~ Come here, please!"
console.log("abc".concat("def")); // 'abcdef'
console.log("abc" + "def"); // 'abcdef'
console.log(["abc"].concat(["def"])); // ['abc', 'def']
// This means that the concat() method is exhibiting polymorphic behavior since it behaves differently based on the context - in this case, based on what data types I give it. 
console.log(["abc"] + ["def"]); // "abc,def"
// However, take a note that using the + operator with arrays does not perform true concatenation. Instead, it coerces the arrays into strings before joining them and elements are separated by commas.

// Here's an example of polymorphism using classes in JavaScript:
class Bird {
    useWings() {
        console.log("Flying!");
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
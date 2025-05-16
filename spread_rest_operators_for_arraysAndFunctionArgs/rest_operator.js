// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
    // Your code here
    console.log(args);
}
unknownArgs(1, 2, 3, 4); 
// Output: [1, 2, 3, 4]
unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");
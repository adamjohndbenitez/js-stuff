// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...remaining] = topSixRestaurants;
console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);

// // Here’s an example of the spread operator:
// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...remaining] = numbers;
// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(remaining); // Output: [3, 4, 5]
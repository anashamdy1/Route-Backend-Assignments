// Question 7: Create an array of strings and return their lengths using map method.
// Input: ["a", "ab", "abc"]  ->  Output: [1, 2, 3]

const words = ["a", "ab", "abc"];

const lengths = words.map(word => word.length);

console.log(lengths);

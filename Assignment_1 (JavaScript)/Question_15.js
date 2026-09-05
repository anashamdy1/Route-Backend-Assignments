// Question 15: Write a function that splits a string into an array of words based on spaces.
// Input: "The quick brown fox"  ->  Output: ["The", "quick", "brown", "fox"]

function splitIntoWords(str) {
  return str.split(" ");
}

console.log(splitIntoWords("The quick brown fox"));

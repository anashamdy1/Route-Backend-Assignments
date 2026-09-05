// Question 13: Write a function to find the largest number in an array.
// Input: [1, 3, 7, 2, 4]  ->  Output: 7

function findLargest(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

console.log(findLargest([1, 3, 7, 2, 4]));

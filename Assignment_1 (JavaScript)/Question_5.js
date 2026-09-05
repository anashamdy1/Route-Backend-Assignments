// Question 5: Use the spread operator to merge two arrays, then return the merged array.
// Input: [1, 2, 3], [4, 5, 6]  ->  Output: [1, 2, 3, 4, 5, 6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2]; // merging using spread operator

console.log(mergedArray);

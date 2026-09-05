// Question 12: Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
// Output Example: Success

function getSuccessMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000); // 3 seconds
  });
}

getSuccessMessage().then((message) => {
  console.log(message);
});

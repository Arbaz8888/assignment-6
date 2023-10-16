
var count = parseInt(prompt("Enter a number to count down from:"));

if (isNaN(count)) {
  console.log("Please enter a valid number.");
} else {
  for (var i = count; i >= 0; i--) {
    console.log(i);
  }
}

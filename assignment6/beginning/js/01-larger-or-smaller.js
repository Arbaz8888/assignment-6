var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

if (num1 === num2) {
  document.write("Two numbers are equal: " + num1);
} else if (num1 > num2) {
  document.write("Larger number: " + num1);
} else {
  document.write("Larger number: " + num2);
}

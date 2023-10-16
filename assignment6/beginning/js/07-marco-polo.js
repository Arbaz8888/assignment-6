var start = 1;
var end = 100;

for (var i = start; i <= end; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Marco! Polo!");
  } else if (i % 3 === 0) {
    console.log("Marco");
  } else if (i % 5 === 0) {
    console.log("Polo");
  } else {
    console.log(i);
  }
}

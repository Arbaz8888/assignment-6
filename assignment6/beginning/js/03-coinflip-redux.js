var Flip;

for (var i = 0; i < 10; i++) {
  Flip = Math.round(Math.random());
  var resultText = Flip === 0 ? "Heads" : "Tails";
  var resultElement = document.getElementById("results");
  resultElement.innerHTML += "Flip " + (i + 1) + ": " + resultText + "<br>";
}

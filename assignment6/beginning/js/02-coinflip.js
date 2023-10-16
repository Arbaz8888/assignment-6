var Flip = Math.floor(Math.random() * 2);

var choice = prompt("Choose 'Heads' or 'Tails':");

var Heads = Flip === 0;

if ((Heads && choice.toLowerCase() === "heads") || (!Heads && choice.toLowerCase() === "tails")) {
  alert("The flip was " + (Heads ? "heads" : "tails") + " and you chose " + choice + "...you win!");
} else {
  alert("The flip was " + (Heads ? "heads" : "tails") + " but you chose " + choice + "...you lose!");
}

var Flip;

do {
    Flip = Math.round(Math.random());

  if (Flip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
} while (Flip !== 1);

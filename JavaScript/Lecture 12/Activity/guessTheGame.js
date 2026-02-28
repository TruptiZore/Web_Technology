// Guess the Output Game (Node.js)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\nGuess the output order - (1 2 3 4 5)");

rl.question("Enter your guess order (space separated) : ", function(userGuess) {

  function demo() {

    console.log("1");  // Sync

    setTimeout(() => {
      console.log("2"); // Macrotask
    }, 0);

    Promise.resolve().then(() => {
      console.log("3"); // Microtask
    });

    console.log("4");  // Sync

    setTimeout(() => {
      console.log("5"); // Macrotask
    }, 0);
  }

  console.log("\nActual Output :");
  demo();

  setTimeout(() => {

    let correct = "1 4 3 2 5";

    if (userGuess.trim() === correct) {
      console.log("\nCorrect Guess! 🎉\n");
    } else {
      console.log("\nWrong Guess!\n");
      console.log("Correct order is :", correct);
      console.log("\n");
    }

    rl.close();

  }, 200);

});
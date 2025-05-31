const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter countdown seconds: ", (input) => {
  let seconds = parseInt(input);
  if (isNaN(seconds) || seconds <= 0) {
    console.log("Please enter a positive integer.");
    rl.close();
    return;
  }

  console.log(`Starting countdown from ${seconds} seconds...`);

  const countdownInterval = setInterval(() => {
    console.log(`Time left: ${seconds} seconds`);
    seconds--;

    if (seconds < 0) {
      clearInterval(countdownInterval);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // Use setTimeout to delay start of keypress listener by 1 second (can be adjusted)
  setTimeout(() => {
    console.log('Press "s" to stop the countdown early.');

    // Listen for keypress on stdin
    process.stdin.setRawMode(true);
    process.stdin.resume();

    process.stdin.on("data", (key) => {
      if (key.toString() === "s") {
        clearInterval(countdownInterval);
        console.log("Countdown stopped by user.");
        process.stdin.setRawMode(false);
        process.stdin.pause();
        rl.close();
      }
    });
  }, 1000);
});

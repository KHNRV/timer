// Allows to read the CLI
const readline = require("readline");

// Allows to read the user key strokes
readline.emitKeypressEvents(process.stdin);

// Allow to read every key press individually
process.stdin.setRawMode(true);

// What
process.stdin.on("keypress", (key, data) => {
  // If user presses [b] it should beep right away
  if (data.name === "b") {
    console.log("🔔");
    // he user can input any number from 1 to 9 and it should
  } else if (Number(data.name) % 10 > 0) {
    // immediately output "setting timer for x seconds...", and
    console.log(`setting timer for ${data.name} seconds...`);
    // beep after that number of seconds has passed
    setTimeout(() => {
      console.log("🔔");
    }, Number(data.name) * 1000);
    // The user can use ctrl + c to exit the program
  } else if (data.ctrl && data.name === "c") {
    // at which point the program should say "Thanks for using me, ciao!"
    console.log("Thanks for using me, ciao!");
    // before terminating
    process.exit();
  }
});

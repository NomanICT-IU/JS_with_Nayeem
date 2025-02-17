let isRunning = true;

while (isRunning) {
  let rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 2) {
    console.log("You have won the game");
    isRunning = false;
  } else {
    console.log(`You have got ${rand}`);
  }
}

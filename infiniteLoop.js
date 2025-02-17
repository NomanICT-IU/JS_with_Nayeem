for ( ; ; ) {
  let rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 10) {
    console.log("You have won the game");
    break;
  } else {
    console.log("You have got " + rand);
  }
}

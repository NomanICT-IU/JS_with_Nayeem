let str = "Abdullah Al Noman";

let length = 0;

while (true) {
  if (str.charAt(length) === "") {
    break;
  } else {
    length++;
  }
}

console.log(length);

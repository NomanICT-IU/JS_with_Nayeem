var arr = [1, 2, 3, 4, 5];

var length = 0;

while (true) {
  if (arr[length] === undefined) {
    break;
  } else {
    length++;
  }
}
console.log(length);

while (arr[length] !== undefined) {
  length++;
}
console.log(length);
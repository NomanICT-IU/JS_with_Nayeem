const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var find = 22;
var isFound = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    isFound =
    console.log("Data found at index : " + i);
    isFound = true;
    break;
  }
}

if(!isFound){
  console.log("Data not found");
}

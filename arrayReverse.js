//method 1

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [];

for (let i = arr1.length - 1; i >= 0; i--) {
  arr2.push(arr1[i]);
}

console.log(arr2);


//Method 2

for (let i = 0; i < arr1.length / 2; i++) {
  let temp = arr1[i];
  arr1[i] = arr1[arr1.length - 1 - i];
  arr1[arr1.length - 1 - i] = temp;
}
console.log(arr1);

//method 3

console.log(arr.reverse());

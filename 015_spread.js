const arr1 = [1, 2, 3];
const arr2 = [0, ...arr1, 4, 5];
const arr3 = arr1;

arr1.push(6);
arr3.push(7);

console.log(arr1);
console.log(arr2);
console.log(arr3);
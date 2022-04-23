const mySet = new Set();

mySet.add('Marta');
mySet.add('Victoria');
mySet.add('Marta');
mySet.add(NaN);

console.log(mySet);
console.log(mySet.size);
console.log(mySet.has('Victoria'));
console.log(mySet.has(NaN));

mySet.delete('Marta');
console.log(mySet);

const toSet = new Set([1, 2, 3, 1, 2, 3, 4, 3, 7, 5, 3, 9]);
console.log(toSet);
const toArr = [...toSet];
console.log(toArr);

for (const entry of toSet.entries()) {
    console.log(entry);
}

toSet.clear();
console.log(toSet);
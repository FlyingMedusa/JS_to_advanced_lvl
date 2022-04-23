const map = new Map([
    ['cucumber', 7.5],
    ['tomato', 11.99],
    ['car', 35000],
]);

const itemToCheck = 'cucumber';

console.log(map.get(itemToCheck));
console.log(map.has(itemToCheck));

map.set('cucumber', 9.5);

console.log(map.get(itemToCheck));
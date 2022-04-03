// SPLICE

const redColors = ["Crimson", "Vermilion", "Cinnabar", "Imperial red", "Burgundy", "Scarlet", "Ruby", "Carnelian"];

removedReds = redColors.splice(1, 3); //index, elements to remove
console.log(redColors);
console.log(removedReds);
redColors.splice(-3); //remove all from (index)
console.log(redColors);

//empty an array
redColors.length = 0;
console.log(redColors);

const animals = ["dog", "cat", "mouse"];

//replace deleted elements
animals.splice(1, 2, 'wolf', 'fox');
console.log(animals);

//adding elements
animals.splice(0, 0, 'lion');
animals.splice(1, 0, 'hyena', 'tiger');
animals.unshift('cat');
console.log(animals);

//splice zwraca co usuwa
myAliveAnimals = ["dog", "cat", "mouse", "spider"];
const myDeadAnimals = myAliveAnimals.splice(1,1);
console.log(myAliveAnimals);
console.log(myDeadAnimals);

/* -------------------------------------------------*/
// SORT

const names = ['Martha', 'Diana', 'Maria', 'Victoria'];
names.sort();
console.log(names);

/* -------------------------------------------------*/
// REVERSE
names.reverse();
console.log(names);

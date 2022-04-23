const obj = {
    'cucumber': 7.5,
    'tomato': 11.99,
    'car': 35000,
}

const map = new Map(Object.entries(obj));

const itemToCheck = 'cucumber';

console.log(map.get(itemToCheck));
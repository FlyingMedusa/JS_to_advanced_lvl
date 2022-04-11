const ar = [1, 2, 3];

const sum = ar.reduce((prev, el) => {
    return prev + el;
}, 0);

console.log(sum);

const arNames = ['Anna', 'Andrzej', 'Bartek', 'Jakub', 'Barbara', 'Halina'];

const namesA = arNames.reduce((prev, curr) => {
    if (curr[0] === 'B') {
        return `${prev} ${curr}`;
    } else {
        return prev;
    }  
}, '');

console.log(namesA);

const namesLength = arNames.reduce((prev, el) => {
    return prev + el.length;
}, 0);

console.log(namesLength);
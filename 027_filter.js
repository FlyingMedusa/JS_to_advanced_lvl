const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.filter(el => {
    if (el % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(newNumbers);

//shortened - same
const newNumbers2 = numbers.filter(el => !(el % 2));
console.log(newNumbers2);

//multiple conditions
const newNumbers3 = numbers.filter(el => !(el % 2) && el < 8);
console.log(newNumbers3);

//multiple methods together
numbers
    .filter(number => !(number % 2))
    .map(number => number * 2)
    .forEach(number => console.log(number));
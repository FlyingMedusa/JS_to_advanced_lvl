const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const onlyEven = number => !(number % 2);
const multipleBy2 = number => number * 2;
const show = number => console.log(number);

numbers
    .filter(onlyEven)
    .map(multipleBy2)
    .forEach(show);
    
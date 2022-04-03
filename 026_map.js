//"saving" our original array from changes
const years = [2023, 1014, 936, 2018];
const futureYears = years.map(year => {
    return year + 2;
})
console.log(years);
console.log(futureYears);

//changing numbers to strings
const numbers = [1, 2, 3];
const stringNumbers = numbers.map(number => number.toString());
console.log(stringNumbers);

//conditions
const newNumbers = numbers.map(function (number) {
    if (number > 1) {
        return 0;
    } else {
        return number;
    }
});
console.log(newNumbers);

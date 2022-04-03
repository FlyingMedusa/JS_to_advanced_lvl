const names = ["Martha", "Diana", "Maria", "Victoria"];

names.forEach(name => console.log(name.toUpperCase()));

//the forEach below changes our original array
const numbers = [1, 2, 3];

numbers.forEach((number, i, array) => {
    array[i] = number + 2;
});

console.log(numbers);

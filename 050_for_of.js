const ar = [1, 2, 3];
// ar.forEach(number => console.log(number));

for (const number of ar) {
    console.log(number);
}

const obj = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 28,
};

const keys = Object.keys(obj);
console.log(keys);
const values = Object.values(obj);
console.log(values);
const entries = Object.entries(obj);
console.log(entries);

for (const entry of entries) {
    const [name, value] = entry;
    console.log(name, value);
}

for (const key of keys) {
    console.log(key, obj[key]);
}

// older
for (const key in obj) {
    console.log(key, obj[key]);
}
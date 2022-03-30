const obj1 = {
    name: 'Xyz',
    surname: 'Abc',
};

const obj2 = {
    ...obj1,
    name: 'Anne',
    age: 100,
};

console.log(obj2);
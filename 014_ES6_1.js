const person = {
    name: 'Imię',
    surname: 'Nazwisko',
};

const {surname, name: personName} = person;

person.name = 'Ann';

console.log(personName, surname);
const personTest = {
    name: 'Testowa',
    surname: 'Osoba',
    lifeEvents: ['1991', '2001', '2077'],
    isAlive: true,
};
console.log(JSON.stringify(personTest));
const string = '{"name":"Testowy","surname":"Człowiek","lifeEvents":["1999","2001","2087"],"isAlive":false}';
console.log(JSON.parse(string));

//-----------------------------------------------------

const h1 = document.querySelector('h1');

const personInfo = localStorage.getItem('person-info');
if (personInfo === null) {
    const name = prompt('What is your name?');
    const surname = prompt('What is your last name?');
    const person = {
        name,
        surname,
    };

    localStorage.setItem('person-info', JSON.stringify(person));
} else {
    const oldPerson = JSON.parse(personInfo);
    //szybciej wcześniej: const {name, surname} = oldPerson;
    h1.innerText = `${oldPerson.name} ${oldPerson.surname}`;
}
function Person(yourName, yourSurname) {
    this.name = yourName;
    this.surname = yourSurname;
    this.sayHello = function () {
        console.log('Hello from ' + this.name + ' ');
    };
}

const ourClass = [];

for (let i = 1; i <= 10; i++) {
    const person = new Person('Osoba', i);
    ourClass.push(person);
}

console.log(ourClass);
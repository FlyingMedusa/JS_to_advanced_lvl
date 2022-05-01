'use strict'

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    breathe() {
        console.log("This animal breathes.");
    }
}

class Mammal extends Animal {
    constructor(name, age, hair) {
        super(name, age);
        this.hair = hair;
    }
    drinkMilk() {
        console.log("This mammal drinks milk.");
    }
}

class Human extends Mammal {
    constructor(name, age, hair, language) {
        super(name, age, hair);
        this.language = language;
    }
    speak() {
        console.log(`This human speaks ${this.language}.`);
    }
}

const theoAnimal = new Animal("Theo", 2);
const lukeTheDog = new Mammal("Luke", 3, "yes");
const toddTheHuman = new Human("Todd", 23, "yes", "English");

toddTheHuman.speak();
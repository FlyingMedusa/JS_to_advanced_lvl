const user = {
    age: 45,
    showAge() {
        console.log(this.age);
    }
}

const stephen = {
    age: 20,
    showAge: user.showAge
}

user.showAge();
stephen.showAge();

//------- call 1 ---------

const human = {
    idNum: 20202020210,
}
const showID = function() {
    console.log(`Your ID number: ${this.idNum}`);
}

showID.call(human);

//------- call 2 ---------

const showUser = function(name) {
    console.log(`${name}'s ID is: ${this.idNum}`);
}

showUser.call(human, "John");

//------- bind ---------

const showIdUser = showID.bind(human);
showIdUser();
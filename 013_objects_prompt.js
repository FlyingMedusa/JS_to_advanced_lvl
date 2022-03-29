function User(userName, userSurname) {
    this.name = userName;
    this.surname = userSurname;
    this.sayHello = function () {
        console.log('Hello from ' + this.name + ' ');
    };
}

const ourUsers = [];

for (let i = 1; i <= 3; i++) {
    const uName = prompt('Name ' + i + ':');
    const uSurname = prompt('Surname ' + i + ':');
    const user = new User(uName, uSurname);
    ourUsers.push(user);
}

console.log(ourUsers);
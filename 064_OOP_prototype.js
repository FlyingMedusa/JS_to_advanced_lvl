const Animal = function(name) {
    this.name = name;
    this.children = [];
}

Animal.prototype.addChildren = function(childName) {
    this.children.push(childName);
};

const hamster = new Animal('bobik');
hamster.addChildren('benio');

// a protoype of a built-in function
const arr = [1, 6, 7, 9];

Array.prototype.delete = function(index) {
    return this.splice(index, 1);
};

console.log(arr);
arr.delete(2);
console.log(arr);

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

console.log(Object.getPrototypeOf(arr));
console.log(arr.__proto__.constructor);
const a = Number(prompt('First number:'));
const b = Number(prompt('Second number:'));
const choice = prompt('Operation:');

if (choice === "+") {
    console.log(a + b);
} else if (choice === "-") {
    console.log(a - b);
} else if (choice === "*") {
    console.log(a * b);
} else if (choice === "/") {
    console.log(a / b);
} else {
    console.log("?");
}

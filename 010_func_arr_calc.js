const a = Number(prompt('First number:'));
const b = Number(prompt('Second number:'));
const choice = prompt('Operation:');

if (choice === "+") {
    const sum = (a, b) => a + b;
    alert(sum(a,b));
} else if (choice === "-") {
    const sub = (a, b) => a - b;
    alert(sub(a,b));
} else if (choice === "*") {
    const mul = (a, b) => a * b;
    alert(mul(a,b));
} else if (choice === "/") {
    const div = (a, b) => a / b;
    alert(div(a,b));
} else {
    alert("?");
}
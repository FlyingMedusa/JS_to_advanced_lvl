function calculator(a, b, choice) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "a or b (or both) is not a number.";
    }
    if (choice === "+") {
        return a + b;
    } else if (choice === "-") {
        return a - b;
    } else if (choice === "*") {
        return a * b;
    } else if (choice === "/") {
        return a / b;
    } else {
        return "wrong choice";
    }
}


const a = Number(prompt('First number:'));
const b = Number(prompt('Second number:'));
const choice = prompt('Operation:');
alert(calculator(a, b, choice));

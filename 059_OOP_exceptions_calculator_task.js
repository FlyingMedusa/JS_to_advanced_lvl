class Calculator {
    constructor(a, b) {
        if (Number.isNaN(a) || Number.isNaN(a)) {
            throw new Error('Provided value is not a number!');
        }
        this.num1 = a;
        this.num2 = b;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        if (this.num2 === 0) {
            throw new Error('You cannot divide by 0!');
        }
        return this.num1 / this.num2;
    }
}

const a = Number(prompt("Enter the first number: "));
const b = Number(prompt("Enter the second number: "));
const choice = prompt("What do you want to do? \n1 - add\n2 - subtract\n3 - multiply\n4 - divide");

const calculation = new Calculator(a,b);

if (choice === "1") {
    console.log(calculation.add());
} else if (choice === "2") {
    console.log(calculation.subtract());
} else if (choice === "3") {
    console.log(calculation.multiply());
} else if (choice === "4") {
    console.log(calculation.divide());
} else {
    console.log('Wrong choice');
}
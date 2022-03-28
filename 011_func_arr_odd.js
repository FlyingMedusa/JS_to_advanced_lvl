const checkNumber = (num) => {
    if (num%2 === 0) {
        console.log('even');
        return num;
    } else if (num%2 === 1) {
        console.log('odd');
        return num*2;
    }
};

const num = Number(prompt('Provide a number:'));
checkNumber(num);
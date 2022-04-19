class PasswordGenerator {
    constructor(charsRange) {
        this.chars = charsRange;
    }

    generate(count = 8) {
        if(typeof count !== 'number') throw new Error('Niepoprawne dane wejściowe');
        if(count < 3) throw new Error('The password has to consist of at least 3 characters');
        if(count > 32) throw new Error('The password cannot consist of more than 32 characters');
        let newPassword = '';
        for(let i = 0; i < count; i++) {
            const index = Math.round(Math.random() * (this.chars.length - 1));
            const newChar = this.chars[index];
            newPassword += newChar;
        }

        return newPassword;
    }
}

class PinGenerator extends PasswordGenerator {
    constructor() {
        super('0123456789');
    }

    calculateCheckSum(password) {
        return [...password].reduce((acc, curr) => acc + parseInt(curr), 0);
    }
}

const charSet = 'abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890@#$%^&*';
const generator = new PasswordGenerator(charSet);

try {
    const password2 = generator.generate(8);
    console.log('Your new password is:', password2);
} catch(e) {
    console.log('ERROR:',e);
}
console.log(generator.generate(8));

const pinGenerator = new PinGenerator();
const pin = pinGenerator.generate();
console.log(pin);
console.log(pinGenerator.calculateCheckSum(pin));
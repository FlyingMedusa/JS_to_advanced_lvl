class Cat {
    constructor(color) {
        this._color = color
    }
    getColor() {
        return this._color;
    }
    setColor(value) {
        if(typeof value === 'string') {
            this._color = value;
        } else {
            console.log('value error');
        }       
    }
}

const kitten = new Cat('black');
console.log(kitten.color);
console.log(kitten.getColor());
console.log(kitten.setColor('white'));
console.log(kitten.getColor());
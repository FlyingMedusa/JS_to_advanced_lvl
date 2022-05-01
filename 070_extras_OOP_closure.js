class Dog {
    constructor(name, dogColor) {
        this.name = name;
        let color = dogColor;
        this.getColor = () => color;
        this.setColor = (value) => color = value;
    }
}

const max = new Dog('Max', 'beige');
console.log(max.getColor());
max.setColor('black');
console.log(max.getColor());

// ----------------------------------------------

class Car {
    constructor(name, counter = 0, year = 2000) {
        this.name = name;
        let _counter = counter;
        let _year = year;
        let _changeNumber = 0;

        this.getYear = () => _year;

        this.setCounter = function(value) {
            _changeNumber++;
            return _counter = value;
        };

        this.getCounter = function() {
            if (_changeNumber) console.log(`Warning! The counter has been changed.`);
            return _counter;
        };

        this.showCarAge = function(year) {
            return year - _year;
        }
    }
}

const polonez = new Car('polonez caro', 15000, 2009);
polonez.setCounter(15500);
console.log(polonez.getCounter());
console.log(polonez.showCarAge(2022));
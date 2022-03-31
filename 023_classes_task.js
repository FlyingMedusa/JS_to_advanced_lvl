class Country {
    constructor(countryName, ...places) {
        this.countryName = countryName;
        this.wonPlaces = places;
    }
    addPlace(newPlace) {
        this.wonPlaces.push(newPlace);
    }
    highestPlace() {
        this.wonPlaces.forEach(score => {
            if (score === 1) {
                console.log(`${this.countryName} won the first place!`);
            }
        });
    }
}

const poland = new Country('Poland', 1, 3, 2, 1, 4);
const germany = new Country('Germany', 3, 7, 4, 1, 2, 9);
const brazil = new Country('Brazil', 12, 3, 9, 5, 5,8);

germany.addPlace(7);
poland.addPlace(1);
console.log(poland.wonPlaces);
console.log(brazil.wonPlaces);
germany.highestPlace();
poland.highestPlace();
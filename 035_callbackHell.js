console.log('Boil some water.');

setTimeout(() => {
    console.log('Water is ready!');
    console.log('Brew the tea...');

    setTimeout(() => {
        console.log('Tea is ready!');
        console.log('Wait until it cools down...');

        setTimeout(() => {
            console.log('Perfect! It\'s time for a tea party!');
        }, 500);
    }, 1000);
}, 1000);
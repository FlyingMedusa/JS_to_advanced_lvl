const test = (...args) => {
    console.log(args);

    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            console.log('All elements must be numbers!');
            return;
        } else {
            sum += args[i];
        }
    }
    console.log(sum);
};

test(1);
test(1, 2, 3, 4, 5, 6);
test();
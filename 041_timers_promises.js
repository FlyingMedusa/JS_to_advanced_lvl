const {setTimeout} = require('timers/promises');

const intervalId =  setInterval(() => console.log('Cyk!'), 100);

(async () => {
    console.log('Hi!');
    await setTimeout(1000);
    console.log('Hello!');

    clearInterval(intervalId);
})();

console.log('What about me?!');
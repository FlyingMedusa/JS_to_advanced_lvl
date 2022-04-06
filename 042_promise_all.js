const {setTimeout} = require('timers/promises');

async function brewTea() {
    console.log('Brewing tea...');
    await setTimeout(1000);
    console.log('Tea is ready!');
}

async function orderKeyboard() {
    console.log('Ordering and waiting for the ordered keyboard...');
    await setTimeout(2000);
    console.log('Keyboard has arrived!');
}

(async () => {
    await Promise.all([brewTea(), orderKeyboard()]);
    console.log('Finished!');
})();
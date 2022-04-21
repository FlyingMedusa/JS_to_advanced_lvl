(async () => {
    try {
        const res = await fetch('...');
    } catch(error) {
        if (error instanceof TypeError) {
            console.log('Error in fetch - invalid data');
        } else {
            console.log('Unidentified error');
        }
    } finally {
        console.log('fetch has finished');
    }
})();
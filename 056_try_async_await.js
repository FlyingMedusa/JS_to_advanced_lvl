(async () => {
    try {
        const res = await fetch('...');
    } catch(error) {
        console.log('Something went wrong', error.message);
    } finally {
        console.log('fetch has finished');
    }
})();
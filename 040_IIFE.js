(async () => {
    const response = await fetch('https://swapi.dev/api/people/1/');
    const data = await response.json();
    /**
     Or:
     const data = await (await fetch('https://swapi.dev/api/people/1/')).json();
     */

    console.log(data);
})();
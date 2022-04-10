
(async () => {
    const response = await fetch(`http://api.nbp.pl/api/cenyzlota?format=json`);
    const data = await response.json();
    console.log(`Na dzień ${data[0].data} cena za gram złota to ${data[0].cena}PLN.`);
})();
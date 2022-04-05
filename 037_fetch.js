fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => console.log(data.height))
    .catch(err => console.log('Coś jest nie tak :/', err));

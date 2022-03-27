let answer;

while (answer !== '10') {
    answer = prompt('Zgadnij ile to 2 x 5');
}

alert('Gratulacje!');

// ver 2

do {
    answer = prompt('Zgadnij ile to 2 x 5');
} while (answer !== '10');

alert('Gratulacje!');
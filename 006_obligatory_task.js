const name = prompt('Podaj proszę swoje imię');
const surname = prompt('Podaj proszę swoje nazwisko');
const age = prompt('Podaj proszę swój wiek');

if (Number(age) > 18) {
    console.log(name, surname);
}
/**
tablica z obrazków:

const imgs = Array.from(document.images);
const imgs2 = [...document.images];
 */

//zamiana pseudotablicy na tablicę
const liList = document.querySelectorAll('li');
const liArray = [...liList];
const liArray2 = Array.from(liList);
console.log(liArray);
console.log(liArray2);

//pobieranie atrybutów z elementów
const h3 = document.querySelector('h3');
console.log(h3.getAttribute('class'));
console.log(h3.getAttribute('data-color'));
console.log(h3.getAttribute('id')); //Jak nie ma to null
console.log(document.querySelector('h2').getAttribute('class'));

console.log(h3.classList);
console.log(h3.classList.contains('mini-title'));
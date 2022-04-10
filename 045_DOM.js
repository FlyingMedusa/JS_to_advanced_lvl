document.querySelector('h2');
document.querySelectorAll('p');

const secondH2 = document.querySelector('.second-h2');
const secondP = document.querySelector('.second-p');

secondH2.style.color = 'navyblue';
secondH2.style.fontSize = '1.3em';
console.log(secondH2.innerText);
secondH2.innerText = "Hello again";
secondP.innerHTML = "<strong>Lorem</strong> ipsum <strong>dolor</strong> sit amet consectetur adipisicing elit blah blah blah..."

console.log(secondP.classList);
secondP.classList.add('more-classes');
console.log(secondP.classList);
console.log(secondP.classList.contains('another-class'));
secondP.classList.remove('more-classes');
console.log(secondP.classList);
console.log("Toggle:");
secondP.classList.toggle('more-classes');
console.log(secondP.classList);
secondP.classList.toggle('more-classes');
console.log(secondP.classList);

document.body.classList.add('clicked');
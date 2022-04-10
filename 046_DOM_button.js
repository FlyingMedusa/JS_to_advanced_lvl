const btn = document.querySelector('.btn-toggle-color');
const body = document.body;
const clickCounter = document.querySelector('.click-counter');

let counter = Number(localStorage.getItem('counter'));
clickCounter.innerText = `The number of clicks: ${counter}`;

btn.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');

    if (isDarkMode) {
        btn.innerText = "Choose the light mode!";
    } else {
        btn.innerText = "Choose the dark mode!";
    }

    counter++;
    clickCounter.innerText = `The number of clicks: ${counter}`;
    localStorage.setItem('counter', counter.toString());
});
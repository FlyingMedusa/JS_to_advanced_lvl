const btn = document.querySelector('.btn-toggle-color');
const body = document.body;
const clickCounter = document.querySelector('.click-counter');

let counter = 0;
btn.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');

    counter++;
    clickCounter.innerText = `The number of clicks: ${counter}`;

    if (isDarkMode) {
        btn.innerText = "Choose the light mode!";
    } else {
        btn.innerText = "Choose the dark mode!";
    }
});
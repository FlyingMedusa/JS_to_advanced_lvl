const text = prompt('Talk to me');

for (let i = 0; i<text.length; i++) {
    if (i % 2 === 0) {
        console.log(text[i].toUpperCase());
    } else {
        console.log(text[i].toLowerCase());
    }
}
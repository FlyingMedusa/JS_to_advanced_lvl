function pow() {
    const num = Number(prompt('Provide a number'));

    if (Number.isNaN(num)) {
        throw new Error('Provided value is not a number!');
    }

    return num**2;
}

try {
    alert(pow());
} catch(err) {
    alert(`Something went wrong! ${err}`);
}
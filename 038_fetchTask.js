const isbn = prompt("Please enter the International Standard Book Number (ISBN) of a book:");

fetch(`https://www.googleapis.com/books/v1/volumes?q=${isbn}`)
    .then(response => response.json())
    .then(data => {
        if (!data.items || data.items.length === 0) {
            console.log('Book not found!');
        } else {
        const {title, author, publisher} = data.items[0].volumeInfo;
        console.log(`Title: ${title}\nAuthor(s): ${author}\nPublisher: ${publisher}`);
        }
    })
    .catch(err => console.log('An error occurred;', err));
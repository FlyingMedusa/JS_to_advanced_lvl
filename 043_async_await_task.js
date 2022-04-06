const isbn = prompt("Please enter the International Standard Book Number (ISBN) of a book:");

(async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${isbn}`);
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
        console.log('Book not found!');
    } else {
        const {title, author, publisher} = data.items[0].volumeInfo;
        console.log(`Title: ${title}\nAuthor(s): ${author}\nPublisher: ${publisher}`);
    }
})();

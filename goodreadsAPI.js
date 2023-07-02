```javascript
const apiKey = 'YOUR_GOODREADS_API_KEY'; // Replace with your Goodreads API key
let books = [];

async function fetchBooks() {
    try {
        const response = await fetch(`https://www.goodreads.com/api/books?user_id=USER_ID&key=${apiKey}`);
        if (!response.ok) {
            throw new Error('fetchError');
        }
        const data = await response.json();
        books = data.books;
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayBooks() {
    const bookList = document.getElementById('bookList');
    if (books.length === 0) {
        bookList.innerHTML = '<p class="emptyList">No books to display</p>';
        return;
    }
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.coverImage}" alt="${book.title}">
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.rating}</p>
            <a href="${book.link}">Read more</a>
        `;
        bookList.appendChild(bookCard);
    });
}

fetchBooks().then(displayBooks);
```
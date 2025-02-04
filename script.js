let bookLibrary = [];

function Book(title, authorName, pages)
{
    this.title = title;
    this.authorName = authorName;
    this.pages = pages;
}

function addBookToLibrary(title, authorName, pages)
{
    bookLibrary.push(new Book(title, authorName, pages));
}

function displayBooks(library) 
{
    const booksContainer = document.querySelector(".books");
    for (let book of library)
    {
        createBookCard(book, booksContainer);
    }
}

function createBookCard(book, booksContainer) 
{
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    let bookTitle = document.createElement("div");
    bookTitle.textContent = book.title;
    bookTitle.classList.add("book-title");
    bookCard.append(bookTitle);

    let atrName = document.createElement("div");
    atrName.textContent = book.authorName;
    bookCard.append(atrName);

    let pages = document.createElement("div");
    pages.textContent = "p. - " + book.pages;
    bookCard.append(pages);

    booksContainer.append(bookCard);
}

addBookToLibrary("\"All quiet on the western front\"", "Erih Maria Remark", "321");
addBookToLibrary("\"All quiet on the western front\"", "Erih Maria Remark", "321");
addBookToLibrary("\"All quiet on the western front\"", "Erih Maria Remark", "321");
displayBooks(bookLibrary);
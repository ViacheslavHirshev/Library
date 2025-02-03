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
    for (let book of library)
    {
        console.log(book);
    }
}

addBookToLibrary("123", "132", "321");
addBookToLibrary("123", "132", "321");
addBookToLibrary("123", "132", "321");
displayBooks(bookLibrary);
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
    clearBooks();
    for (let book of library)
    {
        createBookCard(book, booksContainer);
    }
}

function clearBooks()
{
    const booksContainer = document.querySelector(".books");
    booksContainer.textContent = "";
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

function bindAddBtn() 
{
    const dialog = document.querySelector("dialog");
    const addButton = document.querySelector(".add-btn");
    addButton.addEventListener("click", () =>
    {
        dialog.showModal();
    });
}

function bindCloseBtn() 
{
    const dialog = document.querySelector("dialog");
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () =>
    {
        dialog.close();
    });
}

function submitForm()
{
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) =>
        {
            event.preventDefault();

            const title = document.querySelector("#title-field").value;
            const author = document.querySelector("#author-field").value;
            const pages = document.querySelector("#pages-field").value;

            addBookToLibrary(title, author, pages);
            displayBooks(bookLibrary);
        }
    );
}

addBookToLibrary("\"All quiet on the western front\"", "Erih Maria Remark", "321");
addBookToLibrary("\"All quiet on the western front\"", "Erih Maria Remark", "321");
addBookToLibrary("\"All quiet on the western front\"", "Erih Maria Remark", "321");
displayBooks(bookLibrary);
bindAddBtn();
bindCloseBtn();
submitForm();
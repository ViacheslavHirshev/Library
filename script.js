const bookLibrary = [];

function Book(title, authorName, pages, isRead)
{
    this.title = title;
    this.authorName = authorName;
    this.pages = pages;
    this.read = isRead;
}

function addBookToLibrary(title, authorName, pages, isRead = false)
{
    bookLibrary.push(new Book(title, authorName, pages, isRead));
}

function displayBooks(library) 
{
    clearBooks();

    const booksContainer = document.querySelector(".books");
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
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookTitle = document.createElement("div");
    bookTitle.textContent = "\"" + book.title + "\"";
    bookTitle.classList.add("book-title");
    bookCard.append(bookTitle);

    const authorName = document.createElement("div");
    authorName.textContent = book.authorName;
    authorName.classList.add("book-author");
    bookCard.append(authorName);

    const pages = document.createElement("div");
    pages.textContent = "p. - " + book.pages;
    pages.classList.add("book-pages");
    bookCard.append(pages);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
    bookCard.append(btnContainer);

    const isReadBtn = document.createElement("button");

    if(book.read)
    {
        isReadBtn.classList.add("read-btn");
        isReadBtn.innerText = "Read";
    }
    else
    {
        isReadBtn.classList.add("not-read-btn");
        isReadBtn.innerText = "Not read";
    }

    isReadBtn.addEventListener("click", () =>
    {
        if (book.toggleRead())
        {
           isReadBtn.textContent = "Read";
        }
        else
        {
            isReadBtn.textContent = "Not read";
        }
        isReadBtn.classList.toggle("not-read-btn");
        isReadBtn.classList.toggle("read-btn");
    });
    btnContainer.append(isReadBtn);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () =>
    {
        bookLibrary.splice(bookLibrary.indexOf(book), 1);
        displayBooks(bookLibrary);
    })
    btnContainer.append(removeBtn);

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
            document.querySelector("dialog").close();
            displayBooks(bookLibrary);
        }
    );
}

Book.prototype.toggleRead = function()
{
    return this.read = !this.read;
}

addBookToLibrary("All quiet on the western front", "Erih Maria Remark", "321", true);
addBookToLibrary("All quiet on the western", "Erih Maria Remark", "321", true);
addBookToLibrary("All quiet on the", "Erih Maria Remark", "321", true);
displayBooks(bookLibrary);
bindAddBtn();
bindCloseBtn();
submitForm();
const mainNode = document.querySelector('#main');

async function getAllBooks(){
    const responseJson = await fetch('/books');
    const response = await responseJson.json();
    return response
}

async function getBookById(bookId){
    const responseJson = await fetch(`/books/${bookId}`);
    const response = await responseJson.json();
    return response
}

//Creating HTML markup
function createBookItemMarkup(book){
    return`<li id="${book.id}">${book.title} | ${book.author}</li>`;        
}


function createOverviewMarkup(books){
    return `
    <div id="overview">
        <button>
            Add book
        </button>
        <ul id="list-of-books">
            ${books.map(book => createBookItemMarkup(book)).join('')}
        </ul>
    </div>`;
}

function renderDetailsMarkup(book){
    return `
    <div id="details">
        <button id="button-overview">Back to overview</button>
        <img src="${book.img}">
        <h2>${book.title}</h2>
        <h3>Written by ${book.author}</h3>
        <p>${book.summary}</p>
        <button id="edit-button">Edit book</button>
        <button id="delete-button">Delete</button>
    </div>`;
}

function renderAddBookMarkup(book){
    return `<div id="edit-book">
    <button id="button-overview">Back to overview</button>
    <form>
        <label for="title">Title: </label>
        <input type="text" name="title" id="title">
        <label for="written-by">Written by: </label>
        <input type="text" name="written-by" id="written-by">
        <label for="img-url">Image url: </label>
        <input type="text" name="img-url" id="img-url">
        <label for="synopsis">Synopsis: </label>
        <input type="text" name="synopsis" id="synopsis">
    </form>
    <button type="submit">Save</button>
    <button>Cancel</button></div>`;
}


//rendering funcctions
async function renderOverview(parent){
    const books = await getAllBooks();
    parent.innerHTML = createOverviewMarkup(books);

    //Eventlisteners
    const listNode = document.querySelector('#list-of-books');
    listNode.addEventListener('click', event =>{
        renderBookDetails(mainNode, event.target.id)
    });
    const Button = document.querySelector('#list-of-books');
    listNode.addEventListener('click', event =>{
        renderBookDetails(mainNode, event.target.id);
    });
}

async function renderBookDetails(parent, bookId){
    const book = await getBookById(bookId);
    parent.innerHTML = renderDetailsMarkup(book);
    
    //Eventlisteners
    const editButton = document.querySelector('#edit-button');
    editButton.addEventListener('click', event => {
        renderEditBook(parent,bookId);
    });
    const addButton = document.querySelector('#button-overview');
    addButton.addEventListener('click', event => {
        renderOverview(parent);
        console.log('back to overview')
    })
}

function renderEditBook(parent, bookId){
    parent.innerHTML = renderEditBookMarkup(bookId);

    //Eventlisteners
    const overviewButton = document.querySelector('#button-overview');
    overviewButton.addEventListener('click', event => {
        renderAddBook(parent);
    })
}

function renderAddBook(parent){
    parent.innerHTML = renderAddBookMarkup(bookId);

    //Eventlisteners
    const overviewButton = document.querySelector('#button-overview');
    overviewButton.addEventListener('click', event => {
        renderOverview(parent);
    })
}

renderOverview(mainNode);
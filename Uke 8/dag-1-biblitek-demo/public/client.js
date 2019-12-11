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

async function postNewBook(book){
    return fetch('/books',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
}

async function putEditBook(book){
    console.log(`/books/${book.bookId}`)
    return fetch(`/books/${book.bookId}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
};

async function deleteBook(bookId){
    return fetch(`/books/${bookId}`,{
        method: 'DELETE'
    });
}


//Creating HTML markup
function createBookItemMarkup(book){
    return`<li id="${book.id}">${book.title} | ${book.author}</li>`;        
}


function createOverviewMarkup(books){
    return `
    <div id="overview">
        <button id="add-button">
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
        <br>
        <img src="${book.imgurl}">
        <h2>${book.title}</h2>
        <h3>Written by ${book.author}</h3>
        <p>${book.summary}</p>
        <button id="edit-button">Edit book</button>
        <button id="button-delete">Delete</button>
    </div>`;
}

function renderEditBookMarkup(book){
    return `<div id="edit-book">
    <button id="button-overview">Back to overview</button>
    <br>
    <form id="edit-book-form">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title" value="${book.title||''}">
        <label for="author">Written by: </label>
        <input type="text" name="author" id="author" value="${book.author||''}">
        <label for="img-url">Image url: </label>
        <input type="text" name="imgurl" id="imgurl" value="${book.imgurl||''}">
        <label for="summary">summary: </label>
        <input type="text" name="summary" id="summary" value="${book.summary||''}">
    </form>
    <button type="submit" id="submit-button">Save</button>
    <button id="cancel-button">Cancel</button></div>`;
}

function renderAddBookMarkup(){
    return `<div id="edit-book">
    <br>
    <button id="button-overview">Back to overview</button>
    <form id="add-book-form">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title" min="1">
        <label for="author">Written by: </label>
        <input type="text" name="author" id="author">
        <label for="img-url">Image url: </label>
        <input type="text" name="imgurl" id="imgurl">
        <label for="summary">summary: </label>
        <input type="text" name="summary" id="summary">
    </form>
    <button type="submit" id="submit-button">Save</button>
    <button id="cancel-button">Cancel</button></div>`;
}


function renderErrorMarkup(){
    return `
    <div>
        <p>Something went wrong.</p>
        <button id="overview-button">To overview</button>
    </div>`;
}

//rendering functions

function renderError(parent){
    parent.innerHTML = renderErrorMarkup();

    const overviewButton = document.querySelector('#overview-button');
    overviewButton.addEventListener('click', event => {
        renderOverview(parent);
    })

}

async function renderOverview(parent){
    let books;
    try{
        books = await getAllBooks();
    }catch (err){
        return renderError(parent);
    }
    parent.innerHTML = createOverviewMarkup(books);

    //Eventlisteners
    const listNode = document.querySelector('#list-of-books');
    listNode.addEventListener('click', event =>{
        renderBookDetails(mainNode, event.target.id);
    });
    const addButton = document.querySelector('#add-button');
    addButton.addEventListener('click', event => {
        renderAddBook(parent);
    });
}

async function renderBookDetails(parent, bookId){
    let book;
    try{
        book = await getBookById(bookId);
    }catch (err){
        return renderError(parent);
    };
    parent.innerHTML = renderDetailsMarkup(book);
    console.log(book)
    //Eventlisteners
    const editButton = document.querySelector('#edit-button');
    editButton.addEventListener('click', event => {
        renderEditBook(parent,bookId);
    });

    const addButton = document.querySelector('#button-overview');
    addButton.addEventListener('click', event => {
        renderOverview(parent);
    });

    const deleteButton = document.querySelector('#button-delete');
    deleteButton.addEventListener('click', event => {
        deleteBook(bookId)
        .then(res => {
            console.log(res.status);
            renderOverview(parent);
        });
    });
}

async function renderEditBook(parent, bookId){
    let book;
    try{
        book = await getBookById(bookId);
    }catch (err){
        return renderError(parent);
    };
    parent.innerHTML = renderEditBookMarkup(book);

    //Eventlisteners
    const overviewButton = document.querySelector('#button-overview');
    overviewButton.addEventListener('click', event => {
        renderOverview(parent);
    })

    const cancelButton = document.querySelector('#cancel-button');
    cancelButton.addEventListener('click', event => {
        renderBookDetails(parent, bookId);
    })

    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', event => {
        event.preventDefault();
        const editForm = document.querySelector('#edit-book-form');
        const bookToEdit = {
            title: editForm.title.value,
            author: editForm.author.value,
            imgurl: editForm.imgurl.value,
            summary: editForm.summary.value,
            bookId: bookId
        };
        putEditBook(bookToEdit)
        .then(res => {
            return res.json()
        }).then(res => {
            renderBookDetails(parent, res.id);
        })
    })
}

async function renderAddBook(parent){
    parent.innerHTML = renderAddBookMarkup();

    //Eventlisteners
    const overviewButton = document.querySelector('#button-overview');
    overviewButton.addEventListener('click', event => {
        renderOverview(parent);
    })

    const cancelButton = document.querySelector('#cancel-button');
    cancelButton.addEventListener('click', event => {
        renderOverview(parent);
    })

    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', event => {
        event.preventDefault();
        const addForm = document.querySelector('#add-book-form');
        const bookToAdd = {
            title: addForm.title.value,
            author: addForm.author.value,
            imgurl: addForm.imgurl.value,
            summary: addForm.summary.value,
        };
        postNewBook(bookToAdd)
        .then(res => {
            console.log(res.status);
            renderOverview(parent);
        })
    })

    
}

renderOverview(mainNode);
const customFn = require('./functions');
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'library',
  password: 'password',
  port: 5432,
});

async function getBooksQuery(){
    const books = await pool.query('SELECT * FROM books');
    return books.rows;
};

async function getBookByIdQuery(id){  
    const book = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    return book.rows[0];
}

async function createBookQuery(book){
    const newId = customFn.getNewId();
    const insertedBook = await pool.query('INSERT INTO books (id,title,author,imgurl,summary) VALUES ($1, $2, $3, $4, $5) RETURNING *', [newId, book.title,book.author, book.imgurl,book.summary]);

    return insertedBook.rows[0];
};

async function updateBookQuery(id, book){
    const editedBook = await pool.query('UPDATE books SET title = $1, author = $2, imgurl = $3, summary = $4 WHERE id = $5  RETURNING *', [book.title, book.author, book.imgurl, book.summary, id]);
    return editedBook.rows[0];
};

async function deleteBookQuery(id){
    await pool.query('DELETE FROM books WHERE id = $1', [id]);
    //get function to return deleted book as object
    return
};

module.exports = {
    getBooksQuery,
    getBookByIdQuery,
    createBookQuery,
    updateBookQuery,
    deleteBookQuery
};
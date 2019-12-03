const writeFilePromise = require('fs-writefile-promise');
const readFilePromise = require('fs-readfile-promise');
const Joi = require('@hapi/joi');

//Book-schema
const schemaBook = Joi.object({
    id: Joi.number()
        .integer(),
    title: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    author: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    img: Joi.string()
        .uri(),
    summary: Joi.string()
        .alphanum()
        .min(3)
        .max(1000),
});

//file operations
async function readFromFile(filePath){
    const booksJson = await readFilePromise(filePath);
    const books = JSON.parse(booksJson);
    return books;
};

async function writeToFile(filePath, books){
    const booksJson = JSON.stringify(books,null,2);
    return writeFilePromise(filePath, booksJson);
};

async function getNewId(){
    const books = await readFromFile();
    if(books.length == 0){
        return 1;
    }
    return books[books.length-1].id+1;
}

async function checkBookInput(book){
    let bookObj = {
        title: book.title,
        author: book.author,
        img: book.img,
        summary: book.summary
    }

    return schemaBook.validate(bookObj);
}

module.exports ={
    readFromFile,
    writeToFile,
    getNewId,
    checkBookInput
}
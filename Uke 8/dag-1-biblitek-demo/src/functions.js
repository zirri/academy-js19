const fs = require('fs').promises;
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
    try{
        const booksJson = await fs.readFile(filePath);
        const books = JSON.parse(booksJson);
        return books;
    }catch(err){
        console.log(err.message);
        return {};
    }
    
};

async function writeToFile(filePath, books){
    try{
        const booksJson = JSON.stringify(books,null,2);
        await fs.writeFile(filePath, booksJson);
        return true;
    }catch (err){
        console.log(err.message);
        return false;
    }
};

function getNewId(){
    return Date.now().toString().slice(-8);
}

async function checkBookInput(book){
    console.log('Running validation')
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
const express = require('express');
const router = express.Router();
const customFn = require('./functions')


//Middleware
//Input validation
router.post('/', (req, res, next)=>{
    try{
        customFn.checkBookInput(req.body);
        next();
    }catch(error){
        next(error);
    }
});

router.put('/', (req, res, next)=>{
    try{
        customFn.checkBookInput(req.body);
        next();
    }catch(error){
        next(error);
    }
});

//Endpoints
router.get('/:id', async function (req, res) {
    const id = req.params.id;
    const books = await customFn.readFromFile('./src/books.json');
    const book = books.filter(book => book.id == id)[0];
    console.log('Get request book, bookId: '+id);
    res.json(book);
})

router.get('/', async function (req, res){
    const books = await customFn.readFromFile('./src/books.json');
    console.log('Get request all books')
    res.json(books);
})

router.post('/', async function (req, res){
    const books = await customFn.readFromFile('./src/books.json');
    const newId = customFn.getNewId();
    const book = {
        id: newId,
        title: req.body.title,
        author: req.body.author,
        img: req.body.img,
        summary: req.body.summary
    }
    books.push(book);
    await customFn.writeToFile('./src/books.json',books);
    console.log('Adding new book with bookId: '+book.id)
    res.json(book);
})

router.put('/:id', async function(req, res){
    const books = await customFn.readFromFile('./src/books.json');
    const {id} = req.params || -1;
    const bookToEdit = {
        id,
        title: req.body.title,
        author: req.body.author,
        img: req.body.img,
        summary: req.body.summary
    };
    const indexBook = books.findIndex(book => book.id == bookToEdit.id);
    books[indexBook] = bookToEdit;
    await customFn.writeToFile('./src/books.json', books);
    console.log('Edit book with bookId: '+bookToEdit.id);
    res.json(bookToEdit);
})

router.delete('/:id', async function (req, res){
    const books = await customFn.readFromFile('./src/books.json');
    const bookId = req.params.id;
    const indexBook = books.findIndex(book => book.id == bookId);
    books.splice(indexBook,1)
    await customFn.writeToFile('./src/books.json', books);
    console.log('Deleted book with bookId: '+bookId);
    res.sendStatus(204);
})

router.use('/', function (error, req, res, next) {
    console.log(error.message);
    res.status(404).send("Something went wrong");
});

module.exports = router;
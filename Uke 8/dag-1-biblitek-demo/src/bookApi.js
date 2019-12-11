const express = require('express');
const router = express.Router();
const customFn = require('./functions');
const db = require('./queries');


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
        const result = customFn.checkBookInput(req.body);
        console.log(result)
        next();
    }catch(error){
        next(error);
    }
});

//Endpoints
router.get('/:id', async function (req, res) {
    const id = req.params.id;
    const book = await db.getBookByIdQuery(id);
    console.log('Get request book, bookId: '+id);
    res.json(book);
})

router.get('/', async function (req, res){
    const books = await db.getBooksQuery();
    console.log('Get request all books')
    res.json(books);
})

router.post('/', async function (req, res){
    const book = {
        title: req.body.title,
        author: req.body.author,
        imgurl: req.body.imgurl,
        summary: req.body.summary
    };
    const insertedBook = await db.createBookQuery(book);
    console.log('Adding new book with bookId: '+insertedBook.id);
    res.json(insertedBook);
})

router.put('/:id', async function(req, res){
    const {id} = req.params || -1;
    const bookToEdit = {
        title: req.body.title,
        author: req.body.author,
        imgurl: req.body.imgurl,
        summary: req.body.summary
    };
    const editedBook = await db.updateBookQuery(id, bookToEdit);
    console.log('Edit book with bookId: '+editedBook.id);
    res.json(editedBook);
})

router.delete('/:id', async function (req, res){
    const bookId = req.params.id;
    await db.deleteBookQuery(bookId);
    console.log('Deleted book with bookId: '+bookId);
    res.sendStatus(204);
})

router.use('/', function (error, req, res, next) {
    console.log(error.message);
    res.status(404).send("Something went wrong");
});

module.exports = router;
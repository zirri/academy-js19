const express = require('express');
const app = express();

const books = [
    {
        id: 1,
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        img: 'https://3.bp.blogspot.com/-5eAxda5RqZ4/UF-y-WsLovI/AAAAAAAAJtI/M_ZgIaZgGR0/s1600/harry+potter.jpg',
        summary: 'Harry Potter Lorem'
    },
    {
        id: 2,
        title: 'Lord of the rings',
        author: 'J.R.R. Tolkien',
        img: 'https://3.bp.blogspot.com/-5eAxda5RqZ4/UF-y-WsLovI/AAAAAAAAJtI/M_ZgIaZgGR0/s1600/harry+potter.jpg',
        summary: 'Lorem ipsum'
    },
    {
        id: 3,
        title: 'Mistborn',
        author: 'Brandon Sanderson',
        img: 'https://3.bp.blogspot.com/-5eAxda5RqZ4/UF-y-WsLovI/AAAAAAAAJtI/M_ZgIaZgGR0/s1600/harry+potter.jpg',
        summary: 'Mist ipsum bogus'
    }
];


//Middleware
//to serve static files
app.use(express.static('public'));

app.get('/books', (req, res)=>{
    res.json(books);
})

app.get('/books/:id', function (req, res) {
    const id = req.params.id;
    const book = books.filter(book => book.id == id)[0];
    res.json(book);
})

app.listen(3000, () => {
    console.log('Library app is running on http://localhost:3000');
});
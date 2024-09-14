const express = require("express")
const mongoose = require('mongoose');
const app = express()
const port = 3000

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//DB connectivity code from this site -https://devsarticles.com/mongo-db-connection-with-express-js#how-to-connect-mongo-db-with-express






























app.get("/",(req,res) =>{
    res.send("Hello World")
})


let books =[]

app.use(express.json())


// Create a Book
app.post('/books', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).send('Book not found');
    }
  // Logic to add a book
});

// Get All Books
app.get('/books', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.json(book);
});

// Get a Single Book
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.json(book);
     // Logic to get a single book
});

// Update a Book
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).send('Book not found');
    }
  
    const { title, author } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;
  
    res.send(book);   
    }// Logic to update a book
);

// Delete a Book
app.delete('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) {
      return res.status(404).send('Book not found');
    }
  
    books.splice(bookIndex, 1);
    res.status(204).send();
     // Logic to delete a book
});

app.listen(port,() =>{
    console.log(`server running at http://localhost:${port}`)
})
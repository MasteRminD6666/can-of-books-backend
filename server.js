'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const booksHandler = require('./books/books');
const addHandler = require('./books/books')


const server = express();
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT;
// Routes
server.get('/books', booksHandler)
server.post('/addbook', addHandler)


server.listen(PORT, () => console.log(`listening on ${PORT}`));

'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const booksFun = require('./books/books');



const server = express();
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT;
// Routes
server.get('/books', booksFun.booksHandler)
server.post('/addbook', booksFun.addHandler)


server.listen(PORT, () => console.log(`listening on ${PORT}`));

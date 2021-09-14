'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const booksHandler = require('./books/books')

const server = express();
server.use(cors());

const PORT = process.env.PORT;
// Routes
server.get('/books', booksHandler)
server.get('/test', (request, response) => {

  response.send('test request received')

})

server.listen(PORT, () => console.log(`listening on ${PORT}`));

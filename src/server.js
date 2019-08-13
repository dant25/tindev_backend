const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://lukita:lukita@cluster0-gsrbh.mongodb.net/tindev?retryWrites=true&w=majority', {
useNewUrlParser: true
});

// mongoose.connect('mongodb://localhost:27017/Tinder', {
//     useNewUrlParser: true
// });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333);
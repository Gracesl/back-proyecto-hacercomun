const express = require('express');
const morgan     = require('morgan');
const app     = express();
const server = require("./server");

server.iniciar();

app.use(morgan('dev'));
app.use(express.json());
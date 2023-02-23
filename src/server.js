const express     = require('express');
const environment = require('./environment');
const app         = express();

function iniciar() {     
    app.listen(environment.PORT,() => {
    console.log('server on port: ', environment.PORT);
    });
}

exports.iniciar = iniciar;
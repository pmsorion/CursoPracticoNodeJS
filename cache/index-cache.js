const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const router = require('./network.js');

const app = express();

app.use(bodyParser.json());

//Routes

app.use('/', router)


app.listen(config.cacheService.port, () => {
    console.log('Servicio de cache escuchando en el puerto', config.cacheService.port);
})
require('dotenv').config();
const express = require('express');
const app = express();
const {} = process.env;

require('./middleware')(app);
require('./db');
require('./routes')(app);

module.exports = app;

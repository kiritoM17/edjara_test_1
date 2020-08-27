const createError = require('http-errors');
const bodyParser = require('body-parser');
const express = require('express');
//const createError = require('http-errors');

const path = require('path');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routers/index');
const fileRouter = require('./routers/file');

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/file', fileRouter);


app.listen(4100, () => {
 console.log("le server a demarrer a l'adresse IP 4100");
});
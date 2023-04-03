const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/users');
const { appConf } = require('./config');

const app = express();
const api = new express.Router();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(appConf.API_BASE_URL, api);

api.use(cors())
api.use('/users', usersRouter);

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const allRouters = require('../routers/index');

app.use('/users', allRouters.userRouter);

module.exports = app;

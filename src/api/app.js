const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const allRouters = require('../routers/index');

app.use('/users', allRouters.userRouter);
app.use('/login', allRouters.loginRouter);
app.use('/summaries', allRouters.summaryRouter);

module.exports = app;

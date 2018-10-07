const express = require('express')
const api = require('./route/api')
const www = require('./route/www')
const bodyParser = require('body-parser')
const app = express()
const port = (process.env.PORT || '3000');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', www);
app.use('/apis/', api);

app.listen(port, () => console.log(`backend app listening on port ${port}!`))
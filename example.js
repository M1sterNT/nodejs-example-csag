const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = (process.env.PORT || '3000');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users/name/:name', (req, res) => res.send('Hello ' + req.params.name))
app.post('/users/name', (req, res) => res.send('Hello ' + req.body.name))

app.get('/apis/users/name/:name', (req, res) => res.status(200).json({ success: true, message: 'Hello ' + req.params.name }))

app.listen(port, () => console.log(`backend app listening on port ${port}!`))
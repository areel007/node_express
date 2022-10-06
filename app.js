const express = require('express');

const app = express()

app.use('/', (req, res) => res.end('Hello world!'))

app.listen(3000, () => console.log('App listening on port 3000...'))
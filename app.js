const express = require('express');

const app = express()

app.get('/', (req, res) => res.end('Hello world!'))

app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/')
})

app.listen(3000, () => console.log('App listening on port 3000...'))
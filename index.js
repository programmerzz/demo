const express = require('express')
const app = express()

app.get('/about', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
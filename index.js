const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3002

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
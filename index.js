const express = require('express'),
    app = express(),
    helmet = require('helmet')

app.use(express.json())
app.use(helmet())
app.use(helmet.noCache())
app.use(helmet.frameguard())

app.get('/', (req, res) => {
    res.status(200).json({ "abc": 123 })
})

app.post('/teste', (req, res) => {

    res.status(200).json(req.body)
})

app.listen(3000)
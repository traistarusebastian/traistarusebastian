import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
    res.send('Hello get')
})

app.post('/hello', (req, res) => {
    res.send('Hello post')
})

app.listen(8080)
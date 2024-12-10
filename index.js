
const express = require('express')
const colors =require('colors')

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})

app.listen(port, () => {
    console.log('Server corriendo en: ', `🚀http://localhost:${port}`.blue.bold)
})
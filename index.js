
const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})

app.listen(3000, () => {
    console.log('Server iniciado en puerto 3000')
})
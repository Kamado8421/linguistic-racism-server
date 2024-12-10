const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello, World'
    })
});

app.listen(PORT, () => {
    console.log('Servidor em: http://localhost:'+ PORT);
})
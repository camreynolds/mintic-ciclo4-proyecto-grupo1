// Importar los módulos.
const express = require('express');

// Configuración del servidor.
const app   = express();
const port  = 3300;


app.get("/prueba", (req,res) => {
    let phrase = "It's alive!";
    res.send(phrase);
});

app.listen(port, () => {
    console.log(`API ejecutandose en el puerto ${port}.`);
});
// Importar los módulos.
const express = require('express');
const bodyParser = require('body-parser');
const { stringify } = require('querystring');
const { json } = require('stream/consumers');

// Configuración del servidor.
const app   = express();
const port  = 3000;


// async function limites(req,res){
//     const resultado = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits")
//     .then( data => console.log(data))
//     .catch( (e) => console.error("Error"))
// };

app.get("/prueba", async (req,res) => {
    const respuesta = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    
});

// app.get("/prueba", async (req,res) => {
//     fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits")
//         .then( data => {
//            console.log(data); 
//         })
//         // .then( data => console.log(data))
//         .catch( (e) => console.error("Error"))
// });



app.listen(port, () => {
    console.log(`API ejecutandose en el puerto ${port}.`);
});


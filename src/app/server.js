const express = require('express')
const app = express();

const port = process.env.PORT || 8080; // Para obtener el puerto donde heroku va a escuchar


//  MiddleWare: Un callback Se ejecuta siempre sin importar la URL
//  Todo lo que se ponga en esa carpeta será de acceso público
app.use(express.static('./dist/PeliculAPP'));
app.get('/', (req, res) => {
    res.render('./index.html', {
        nombre: 'PedrOrtizM',
    });
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto: ' + port);
});
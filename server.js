/*en caso de  hacer uso con el directorio controlador se 
debe importar como se observa en la siguiente linea, con el nombre del archivo js
que contiene la logica */
//const controller = require('./controller/nombredelcontrollador.js');

//Se crea rama con nombre ruta para empezara trabajar esta parte del loguin

/* const controller = require('./controllers/UserController.js'); */
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
//Esta es la instancia de express utilziada en la app
const app = express();
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content - Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.set('PORT', process.env.PORT || 3000);
app.get('/', function (req, res) {
    console.log("Extructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
    
});
/* const port = 3000 */
app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;
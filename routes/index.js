//llamar router de express
const router = require('express').Router();
const apiRouterUser = require('./api/users');
router.use('/users', apiRouterUser);

// router.get('/api', function(req, res) {
//     console.log("Estructura base del proyecto backend");
//     res.send("Estructura base del proyecto backend");
// });
//manejador de rutas

module.exports = router;
//llamar router de express
const router = require('express').Router();
const apiRouterUser = require('./api/users.js');
//segun requerimiento no es user sino auth
router.use('/auth', apiRouterUser); 
module.exports = router;
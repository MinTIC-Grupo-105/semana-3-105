
const router = require('express').Router();
//con modelos
const models = require('../../models');
//con controladores
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');

//api/user/
router.get('/', async(req, res)=>{
    const user = await models.user.findAll();
    res.status(200).json(user);
});

//api/user/resgiter usuario  //metodo post por que se requiere enviar datos de usuario
router.post('/register', async(req, res)=>{
    //encriptar contraseña
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await models.user.create(req.body);
    res.status(200).json(user);
});
//el metodo del controlador no es login sino signin
router.post('/signin', userController.signin); 

module.exports = router;
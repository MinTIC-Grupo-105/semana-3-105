const config = require('../secret/config.js');
const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
 //cambiamos METODO Login por signin segun requerimiento del reto
exports.signin = (req, res) => {
    models.user.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send('User Not Found.');
        }
        const passwordIsValid = bcrypt.compareSync(req.body.password,
            user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                auth: false, accessToken: null,
                reason: "Invalid Password!"
            });
        }
        const token = jwt.sign({
            id: user.id, name: user.name, email:
                user.email
        }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, accessToken: token });
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
    });
}
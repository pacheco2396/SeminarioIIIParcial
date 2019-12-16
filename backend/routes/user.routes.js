const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');

router.get('/' , userCtrl.getUsers);

router.post('/validar' , userCtrl.validarUser);

router.post('/', userCtrl.createUsuario );



module.exports = router;
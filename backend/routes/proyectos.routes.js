const express = require('express');
const router = express.Router();

const proyectCtrl = require('../controllers/proyecto.controller');

router.get('/' , proyectCtrl.getProyectos );

router.get('/users/:id', proyectCtrl.getProyectosByUser );

router.get('/:id' , proyectCtrl.getProyecto );

router.post('/', proyectCtrl.createProyecto );

router.post('/:user', proyectCtrl.createProyectoUser);

router.put('/:id', proyectCtrl.editProyecto);

router.delete('/:id', proyectCtrl.deleteProyecto);


module.exports = router;
const express = require('express');
const router = express.Router();

const tareaCtrl = require('../controllers/tareas.controller');

router.get('/' , tareaCtrl.getTareas );

router.get('/:id' , tareaCtrl.getTareas);

router.post('/:proyecto', tareaCtrl.createTarea );

router.put('/:id', tareaCtrl.editTarea);

router.delete('/:id', tareaCtrl.deleteTarea);


module.exports = router;
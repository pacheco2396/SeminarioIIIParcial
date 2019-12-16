const Tarea = require('../models/tareas');

const tareaCtrl = {};

tareaCtrl.getTareas = async (req, res) => {
   const tareas = await Tarea.find( { proyecto: req.params.id } );
   res.json(tareas);
};

tareaCtrl.createTarea = async (req, res) => {
    const tarea = new Tarea({
        nombre: req.body.nombre,
        descripcion : req.body.descripcion,
        proyecto: req.params.proyecto
    });
    await tarea.save();
    res.json({
        'status': 'Tarea Saved'
    });
};

tareaCtrl.getTarea = async (req, res) => {
     
    const tarea = await Tarea.findById(req.params.id);
    console.log('dato' + tarea);
    cliente.hmset('Tarea-'+req.params.id, {'nombre':tarea.nombre,'descripcion':tarea.descripcion,'usuario':tarea.proyecto}, (err, reply) => {
        if(err) {
          console.error(err);
        } else {
          console.log(reply);
        }
      });
    res.json(tarea);
};

tareaCtrl.editTarea = async (req, res) => {
    //console.log(req.params.id);
    const { id } = req.params;
    const tarea = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    }
    await Tarea.findByIdAndUpdate(id, {$set : tarea}, {new : true});
    res.json({
        'status': 'Tarea Update'
    });
};

tareaCtrl.deleteTarea = async (req, res) => {
    //console.log(req.params.id);
    await Tarea.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Tarea Deleted'
    });
};


module.exports = tareaCtrl;
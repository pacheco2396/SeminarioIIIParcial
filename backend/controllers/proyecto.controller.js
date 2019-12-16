const Proyecto = require('../models/proyectos');

const proyectoCtrl = {};

proyectoCtrl.getProyectos = async (req, res) => {
   const proyectos = await Proyecto.find({ usuario : req.body.usuario });
   res.json(proyectos);
};

proyectoCtrl.getProyectosByUser = async (req, res) => {
    const proyectos = await Proyecto.find({ usuario : req.params.id }).sort({fecha: 'desc'});
    res.json(proyectos);
 };

proyectoCtrl.createProyecto = async (req, res) => {
    const proyecto = new Proyecto({
        nombre: req.body.nombre,
        descripcion : req.body.descripcion,
        usuario: req.body.usuario
    });
    await proyecto.save();
    res.json({
        'status': 'Proyecto Saved'
    });
};

proyectoCtrl.createProyectoUser = async (req, res) => {
    const proyecto = new Proyecto({
        nombre: req.body.nombre,
        descripcion : req.body.descripcion,
        usuario: req.params.user
    });
    await proyecto.save();
    res.json({
        'status': 'Proyecto Saved'
    });
};


proyectoCtrl.getProyecto = async (req, res) => {
    const proyecto = await Proyecto.findById(req.params.id);
    console.log('dato' + proyecto);
    cliente.hmset(req.params.id, {'nombre':proyecto.nombre,'descripcion':proyecto.descripcion,'usuario':proyecto.usuario,'fecha':proyecto.fecha}, (err, reply) => {
        if(err) {
          console.error(err);
        } else {
          console.log(reply);
        }
      });
    res.json(proyecto);
};

proyectoCtrl.editProyecto = async (req, res) => {
    //console.log(req.params.id);
    const { id } = req.params;
    const proyecto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    }
    await Proyecto.findByIdAndUpdate(id, {$set : proyecto}, {new : true});
    res.json({
        'status': 'Proyecto Update'
    });
};

proyectoCtrl.deleteProyecto = async (req, res) => {
    //console.log(req.params.id);
    await Proyecto.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Proyecto Deleted'
    });
};



module.exports = proyectoCtrl;
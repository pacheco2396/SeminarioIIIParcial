const User = require('../models/usuarios');

const usuarioCtrl = {};

usuarioCtrl.getUsers = async (req, res) => {
   const user = await User.find( );
   res.json(user);
};

usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new User({
        name: req.body.name,
        email : req.body.email,
        password: req.body.password
    });
    await usuario.save();
    res.json({
        'status': 'User Saved'
    });
};

usuarioCtrl.getTarea = async (req, res) => {
     
    const tarea = await User.findById(req.params.id);
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

usuarioCtrl.editTarea = async (req, res) => {
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

usuarioCtrl.deleteTarea = async (req, res) => {
    //console.log(req.params.id);
    await User.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'User Deleted'
    });
};

usuarioCtrl.validarUser = async (req, res) => {
    //console.log(req.params.id);
    await User.countDocuments({email: req.body.email, password: req.body.password}, function(err, c) {
        res.json(c)
   });
    
};


usuarioCtrl.cache = async (req, res, next) => {
    const { id } = req.params;

    cliente.hgetall(id, (err, data) => {
        if(err) throw err;
        
        if(data !== null) {
            res.send(data); 
        }else{
            next();
        }
     });

}

module.exports = usuarioCtrl;
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');


const { mongoose } = require('./db');

//Configuracion
app.set('port', process.env.PORT || 9000);


//Middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}))



//Habilitar BodyPaser para leer datos del formulario
//app.use(bodyPaser.urlencoded({extended: true}));
//app.use(bodyPaser.json());

//Router
app.use('/api/proyectos', require('./routes/proyectos.routes'));
app.use('/api/tareas', require('./routes/tareas.routes'));
app.use('/api/user', require('./routes/user.routes'));

app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})

import db from '../database/db.js'

import { DataTypes } from 'sequelize'

 const ModeloProfesores = db.define('profesores',{
    

    nombre: {type: DataTypes.STRING},
    apellido: {type: DataTypes.STRING},
    profesorId: {type: DataTypes.INTEGER,
        references:'ModeloAsignaturas',
        key:'id'
    }

})

export default ModeloProfesores;
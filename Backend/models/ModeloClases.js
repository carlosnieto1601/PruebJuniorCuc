
import db from '../database/db.js'

import { DataTypes } from 'sequelize'

 const ModeloClases = db.define('clases',{
    

    nombre: {type: DataTypes.STRING},
    estudianteId: {type: DataTypes.INTEGER},
   asignaturaId: {type: DataTypes.INTEGER}
})

export default ModeloClases;
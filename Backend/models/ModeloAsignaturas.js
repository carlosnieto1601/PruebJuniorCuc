import db from '../database/db.js'

import { DataTypes } from 'sequelize'

 const ModeloAsignaturas = db.define('asignaturas',{
    

    nombre: {type: DataTypes.STRING},
    salon: {type: DataTypes.STRING},
    horario: {type: DataTypes.STRING}
})

export default ModeloAsignaturas;
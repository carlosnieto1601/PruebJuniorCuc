import db from '../database/db.js'

import { DataTypes } from 'sequelize'



const Models = db.define('estudiantes', {

    nombre: {type: DataTypes.STRING},
    apellido: {type: DataTypes.STRING},
    cedula: {type: DataTypes.STRING},
    correo: {type: DataTypes.STRING},
    programaacademico: {type: DataTypes.STRING}
})

export default Models;

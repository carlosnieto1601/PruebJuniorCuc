import db from '../database/db.js'

import { DataTypes } from 'sequelize'



const Models = db.define('estudiantes', {

    Nombre: {type: DataTypes.STRING},
    Apellido: {type: DataTypes.STRING},
    Numero_de_identificacion: {type: DataTypes.STRING},
    Correo: {type: DataTypes.STRING},
    ProgramaAcademico: {type: DataTypes.STRING},
})
 


export default Models;
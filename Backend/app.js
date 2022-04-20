import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import estudiantesRoutes from './routes/routes.js'
import asignaturaRoutes from './routes/routesasignatura.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/estudiantes',estudiantesRoutes)
app.use('/asignaturas',asignaturaRoutes)


try {
    await db.authenticate()
    console.log('conexion exitosa db')
    
} catch (error) {
    console.log(`el erro de la conexion a db es : ${error}`)
}

app.listen(8000, ()=>{
    console.log('server 8000')
})
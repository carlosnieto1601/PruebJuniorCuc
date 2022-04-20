import { Sequelize } from "sequelize";


const db= new Sequelize ('pruebacuc', 'root','',{
    host:'localhost',
    dialect:'mysql'
})


export default db;
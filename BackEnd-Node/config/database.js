import { Sequelize } from "sequelize";
 
const db = new Sequelize({
    database: 'node_prova',
    username: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
 
export default db;
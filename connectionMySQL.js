require('dotenv').config({path:'./.env'});

const port = process.env.PORT_DB;
const nameDatabase = process.env.NAME_DB;
const nameUser = process.env.NAME_USER;
const passwordDB = process.env.PORT_DB;

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: port,
    user: nameUser,
    password: passwordDB,
    database: nameDatabase,
});

connection.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos');
        return
    }
    console.log('Conexión a la base de datos');
})

connection.query('SELECT')
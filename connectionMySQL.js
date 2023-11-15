const btnGetFive = document.querySelector('.get-give');

import mysql from './node_modules/mysql2';

const connection = mysql.createConnection({
    host: '72.167.77.8',
    user: 'IT_USER',
    password: '{Nd8=[So7Uk3',
    database: 'DATA_NACIONAL',
});

export const functionBtn = btnGetFive.addEventListener('click', connectionDB);

const connectionDB = () => connection.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos');
        return
    }
    console.log('Conexión a la base de datos');

    const query = 'SELECT * FROM NACIONAL_OCGN LIMIT 5';

    connection.query(query, (error, results) => {
    if (error) {
        console.log(`Error al ejecutar la consulta: ${error}`);
        throw error
    }

    console.log(`Registros seleccionados: ${results}`);

    connection.end();
})
})


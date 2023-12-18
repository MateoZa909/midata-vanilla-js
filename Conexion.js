import { createConnection } from 'mysql';

const db = createConnection({
    host: '72.167.77.8',
    port: 3306,
    user: 'IT_USER',
    password: '{Nd8=[So7Uk3',
    database: 'DATA_NACIONAL'
});

// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});
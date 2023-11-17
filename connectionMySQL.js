import { createConnection } from 'mysql';

const connection = createConnection({
    host: 'localhost',
    user: 'mateo',
    password: 'Kanekong909',
    database: 'data_nacional'
})

connection.connect((err) => {
    if (err) {
        console.log('No se pudo conectar');
    } else {
        console.log('Conexion exitosa!');
    }
})

// Datos del registro a insertar
const record = [
    1,               // CAL_ID
    'Contacto1',     // CAL_CONTACT
    'AgenteFN1',     // CAL_AGENT_FN
    'AgenteLN1',     // CAL_AGENT_LN
    '123456789',     // CAL_PHONE
    '2023-11-15 10:00:00', // CAL_CALL_START
    '2023-11-15 10:30:00', // CAL_CALL_FINISH
    'Campaña1',      // CAL_CAMPAIGN
    'Cola1',         // CAL_QUEUE
    1800,            // CAL_TIME_LENGTH
    300,             // CAL_TIME_QUEUE
    1200,            // CAL_TIME_SPEAKE
    300,             // CAL_TIME_WRAP
    '2023-11-15 10:30:00', // CAL_HANGUP
    'TipoDoc1',      // CAL_TYPEDOC
    'Documento1',    // CAL_DOCUMENTO
    'Motivo1'        // CAL_MOTIVO
  ];

// Consulta SQL
const insertSQL = 'INSERT INTO cgn_llamadas_inbound (CAL_ID, CAL_CONTACT, CAL_AGENT_FN, CAL_AGENT_LN, CAL_PHONE, CAL_CALL_START, CAL_CALL_FINISH, CAL_CAMPAIGN, CAL_QUEUE, CAL_TIME_LENGTH, CAL_TIME_QUEUE, CAL_TIME_SPEAKE, CAL_TIME_WRAP, CAL_HANGUP, CAL_TYPEDOC, CAL_DOCUMENTO, CAL_MOTIVO) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

// Ejecutar la consulta
connection.query(insertSQL, record, (err, results) => {
    if (err) {
      console.error('Error al insertar el registro:', err);
    } else {
      console.log('Registro insertado correctamente:', results);
    }
  
    // Cerrar la conexión después de la ejecución de la consulta
    connection.end();
});

/************************************************+ 

*/

          



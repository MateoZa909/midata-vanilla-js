// window.addEventListener('load', function() {
//     console.log('La página ha terminado de cargarse!!');
// });


/* Botones Flechas arriba y abajo */
// const btnArrowUp = document.querySelector('.arrow-up');
// const btnArrowDown = document.querySelector('.arrow-down');

// Contenedor Tools
// const containerTools = document.querySelector('.tools');

// Referencia a la tabla de base de datos
// const databaseTable = document.querySelector('#database-table');

// btnArrowDown.addEventListener('click', () => {
//     containerTools.style.display = 'flex';
//     btnArrowDown.style.display = 'none';
// })

// btnArrowUp.addEventListener('click', () => {
//     containerTools.style.display = 'none';
//     btnArrowDown.style.display = 'block';
// })


// // Boton mostrar todo
// const btnAll = document.querySelector('#btn-all')
// btnAll.addEventListener('click', () => {
//   console.log('Hola');
// });


  
  // // Datos del registro a insertar
  // const record = [
  //   1,               // CAL_ID
  //   'Contacto2',     // CAL_CONTACT
  //   'AgenteFN2',     // CAL_AGENT_FN
  //   'AgenteLN2',     // CAL_AGENT_LN
  //   '123456789',     // CAL_PHONE
  //   '2023-11-15 10:00:00', // CAL_CALL_START
  //   '2023-11-15 10:30:00', // CAL_CALL_FINISH
  //   'Campaña1',      // CAL_CAMPAIGN
  //   'Cola1',         // CAL_QUEUE
  //   434,            // CAL_TIME_LENGTH
  //   535,             // CAL_TIME_QUEUE
  //   33,            // CAL_TIME_SPEAKE
  //   2,             // CAL_TIME_WRAP
  //   '2023-11-15 10:30:00', // CAL_HANGUP
  //   'TipoDoc1',      // CAL_TYPEDOC
  //   'Documento1',    // CAL_DOCUMENTO
  //   'Agendamiento'        // CAL_MOTIVO
  // ];
  
  // const insertSQL = 'INSERT INTO cgn_llamadas_inbound (CAL_ID, CAL_CONTACT, CAL_AGENT_FN, CAL_AGENT_LN, CAL_PHONE, CAL_CALL_START, CAL_CALL_FINISH, CAL_CAMPAIGN, CAL_QUEUE, CAL_TIME_LENGTH, CAL_TIME_QUEUE, CAL_TIME_SPEAKE, CAL_TIME_WRAP, CAL_HANGUP, CAL_TYPEDOC, CAL_DOCUMENTO, CAL_MOTIVO) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
  // connection.query(insertSQL, record, (err, results) => {
  //   if (err) {
  //     console.error('Error al insertar el registro:', err);
  //   } else {
  //     console.log('Registro insertado correctamente:', results);
  //   }
  
  //   // Cerrar la conexión después de la ejecución de la consulta
  //   connection.end();
  // });
  
  /************************************************+ 
   Consulta MySQL
  */

// Consulta a base de datos

// connection.query(cgn_llamadas_inbound, (err, records) => {
// if (err) {
//     throw err;
// } else {
//     for (let i = 0; i < records.length; i++) {
//     const element = records[i];
//     tbody.append(
//         '<tr>' +
//         '<td>'+element["CAL_ID"]+'</td>' +
//         '<td>'+element["CAL_CONTACT"]+'</td>' +
//         '<td>'+element["CAL_AGENT_FN"]+'</td>'+
//         '<td>'+element["CAL_AGENT_LN"]+'</td>'+
//         '<td>'+element["CAL_PHONE"]+'</td>'+
//         '<td>'+element["CAL_CALL_START"]+'</td>'+
//         '<td>'+element["CAL_CALL_FINISH"]+'</td>'+
//         '<td>'+element["CAL_CAMPAIGN"]+'</td>'+
//         '<td>'+element["CAL_QUEUE"]+'</td>'+
//         '<td>'+element["CAL_TIME_LENGTH"]+'</td>'+
//         '<td>'+element["CAL_TIME_QUEUE"]+'</td>'+
//         '<td>'+element["CAL_TIME_SPEAKE"]+'</td>'+
//         '<td>'+element["CAL_TIME_WRAP"]+'</td>'+
//         '<td>'+element["CAL_HANGUP"]+'</td>'+
//         '<td>'+element["CAL_TYPEDOC"]+'</td>'+
//         '<td>'+element["CAL_DOCUMENTO"]+'</td>'+
//         '<td>'+element["CAL_MOTIVO"]+'</td>'+
//         '</tr>'
//     );
//     }
// }
// })

import { createConnection } from 'mysql';

const connection = createConnection({
  host: 'localhost',
  user: 'mateo',
  password: 'Kanekong909',
  database: 'data_nacional'
});

connection.connect((err) => {
  if (err) {
    console.log('No se pudo conectar');
  } else {
    console.log('Conexion exitosa!');
  }
});

const cgn_llamadas_inbound = 'SELECT * FROM cgn_llamadas_inbound';

const connectionQuery = () => {
  console.log('It works');
};

const btnAll = document.querySelector('#btn-all');
btnAll.addEventListener('click', connectionQuery);

connection.query(cgn_llamadas_inbound, (err, rows) => {
  if (err) {
    throw err;
  } else {
    console.log(rows);
  }
});

connection.end();











const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuración de la base de datos
const db = mysql.createConnection({
    host: '72.167.77.8',
    port: 3306,
    user: 'IT_USER',
    password: '{Nd8=[So7Uk3',
    database: 'DATA_NACIONAL'
});

// Endpoint 5 registros
app.get('/5-registros', (req, res) => {
    const query = 'SELECT * FROM CGN_LLAMADAS_INBOUND LIMIT 5'; // Reemplaza nombre_de_tabla por tu tabla real
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ' + err.message);
        res.status(500).send('Error al obtener los registros');
      } else {
        console.log('Registros obtenidos:');
        console.log(results); // Imprime los registros en la consola del servidor
        res.status(200).send('Registros obtenidos'); // Envía una respuesta al cliente
      }
    });
});

// Endpoint 10 registros
app.get('/10-registros', (req, res) => {
    const query = 'SELECT * FROM CGN_LLAMADAS_INBOUND LIMIT 10'; // Reemplaza nombre_de_tabla por tu tabla real
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ' + err.message);
        res.status(500).send('Error al obtener los registros');
      } else {
        console.log('Registros obtenidos:');
        console.log(results); // Imprime los registros en la consola del servidor
        res.status(200).send('Registros obtenidos'); // Envía una respuesta al cliente
      }
    });
});

// Endpoint 25 registros
app.get('/25-registros', (req, res) => {
    const query = 'SELECT * FROM CGN_LLAMADAS_INBOUND LIMIT 25'; // Reemplaza nombre_de_tabla por tu tabla real
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ' + err.message);
        res.status(500).send('Error al obtener los registros');
      } else {
        console.log('Registros obtenidos:');
        console.log(results); // Imprime los registros en la consola del servidor
        res.status(200).send('Registros obtenidos'); // Envía una respuesta al cliente
      }
    });
});

// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});


app.get('/obtener-datos', (req, res) => {
    const cantidad = req.query.cantidad; // Obtiene la cantidad desde la solicitud GET.
    
    // Realiza la lógica para obtener los datos basados en la cantidad.
    // Luego, envía los datos como respuesta.
    const datos = obtenerDatosDesdeLaBaseDeDatos(cantidad); // Implementa esta función según tu necesidad.

    res.json(datos);
});

app.listen(port, () => {
    console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});

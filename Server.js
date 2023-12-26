const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Importar el paquete 'cors'
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/styles/style.css', (req, res) => {
//   res.setHeader('Content-Type', 'text/css');
//   res.sendFile(__dirname + '/styles/style.css');
// });

const dbCampañas = mysql.createConnection({
  host: '',
  port: '',
  user: '',
  password: '',
  database: ''
});

// Configuración de la base de datos
const db = mysql.createConnection({
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

app.get('/5-registros', (req, res) => {
  const query = 'SELECT * FROM CGN_LLAMADAS_INBOUND LIMIT 5'; 
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ' + err.message);
      res.status(500).json({ error: 'Error al obtener los registros' });
    } else {
      console.log('Registros obtenidos:');
      console.log(results);

      // Renderizar la vista y enviarla como respuesta
      res.render('5-registros', { registros: results }); // '5-registros' es el nombre de la vista
    }
  });
});

// Endpoint 10 registros
app.get('/10-registros', (req, res) => {
  const query = 'SELECT * FROM CGN_LLAMADAS_INBOUND LIMIT 10'; 

  db.query(query, (err, results) => {
      if (err) {
          console.error('Error al ejecutar la consulta: ' + err.message);
          res.status(500).json({ error: 'Error al obtener los registros' }); // Enviar un objeto JSON de error
      } else {
          console.log('Registros obtenidos:');
          console.log(results); // Imprime los registros en la consola del servidor
          res.status(200).json(results); // Enviar los resultados como objeto JSON
      }
  });
});

// Endpoint 25 registros
app.get('/25-registros', (req, res) => {
  const query = 'SELECT * FROM CGN_LLAMADAS_INBOUND LIMIT 25'; 

  db.query(query, (err, results) => {
      if (err) {
          console.error('Error al ejecutar la consulta: ' + err.message);
          res.status(500).json({ error: 'Error al obtener los registros' }); // Enviar un objeto JSON de error
      } else {
          console.log('Registros obtenidos:');
          console.log(results); // Imprime los registros en la consola del servidor
          res.status(200).json(results); // Enviar los resultados como objeto JSON
      }
  });
});

app.get('/nacionales', (req, res) => {
  res.sendFile(__dirname + '/Nacional.html');
});

app.get('/internacionales', (req, res) => {
  res.sendFile(__dirname + '/Internacional.html');
});

app.post('/actualizar-message-campaign', (req, res) => {
  const nuevoContenido = req.body.nuevoContenido; // Obtén el nuevo contenido desde la solicitud POST

  // Actualiza el contenido del contenedor message-campaign con el nuevoContenido
  // Esto puede implicar guardar el nuevoContenido en la base de datos o realizar alguna otra operación según tus necesidades.

  // Envía una respuesta de éxito
  res.status(200).json({ mensaje: 'Contenido actualizado con éxito' });
});

app.post('/mostrar-y-actualizar-message-delete', (req, res) => {
  const nuevoContenido = req.body.nuevoContenido; // Obtén el nuevo contenido desde la solicitud POST

  // Puedes realizar alguna lógica aquí para actualizar el contenido del contenedor
  // Esto podría incluir guardar el nuevoContenido en la base de datos o realizar otra operación según tus necesidades.

  // Envía una respuesta de éxito
  res.status(200).json({ mensaje: 'Contenido actualizado con éxito' });
});

app.listen(port, () => {
    console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});

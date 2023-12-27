const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Importar el paquete 'cors'
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/styles/style.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname + '/styles/style.css');
});

// const dbCampañas = mysql.createConnection({
//   host: '',
//   port: '',
//   user: '',
//   password: '',
//   database: ''
// });

// dbCampañas.connect(err => {
//   if (err) {
//       console.error('Error al conectar a la base de datos:', err);
//       return;
//   }
//   console.log('Conectado a la base de datos MySQL');
// });

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

// Endpoint 5 registros
// app.get('/5-regis', (req, res) => {
//   res.sendFile(__dirname + '/5Registros.html');
// });

app.get('/5/registros', (req, res) => {
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
// Endpoint 5 registros

// Endpoint 10 registros
// app.get('/10-regis', (req, res) => {
//   res.sendFile(__dirname + '/10Registros.html');
// });

app.get('/10/registros', (req, res) => {
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
// Endpoint 10 registros

// Endpoint 25 registros
// app.get('/25-regis', (req, res) => {
//   res.sendFile(__dirname + '/10Registros.html');
// });

app.get('/25/registros', (req, res) => {
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
// Endpoint 25 registros

app.get('/nacionales', (req, res) => {
  res.sendFile(__dirname + '/Nacional.html');
});

app.get('/internacionales', (req, res) => {
  res.sendFile(__dirname + '/Internacional.html');
});

// Añadir
app.post('/añadir-campaña', (req, res) => {
  // Valores para el nuevo registro
  const valor1 = 'Valor1'; // Reemplaza con el valor real para columna1
  const valor2 = 'Valor2'; // Reemplaza con el valor real para columna2
  const valor3 = 'Valor3'; // Reemplaza con el valor real para columna3

  // Sentencia SQL para insertar un nuevo registro
  const sql = `INSERT INTO miTabla (columna1, columna2, columna3) VALUES (?, ?, ?)`;

  // Ejecutar la sentencia SQL
  db.query(sql, [valor1, valor2, valor3], (err, result) => {
    if (err) {
      console.error('Error al insertar el nuevo registro:', err);
    } else {
      console.log('Nuevo registro insertado con éxito');
    }
  });

  const nuevoContenido = req.body.nuevoContenido; // Obtén el nuevo contenido desde la solicitud POST

  // Actualiza el contenido del contenedor message-campaign con el nuevoContenido
  // Esto puede implicar guardar el nuevoContenido en la base de datos o realizar alguna otra operación según tus necesidades.

  // Envía una respuesta de éxito
  res.status(200).json({ mensaje: 'Contenido actualizado con éxito' });
});
// Añadir

// Eliminar
app.post('/eliminar-campaña', (req, res) => {
  // ID del registro que deseas eliminar
  const idAeliminar = 1; // Reemplaza esto con el ID real del registro que deseas eliminar

  // Sentencia SQL para eliminar el registro
  const sql = `DELETE FROM miTabla WHERE id = ?`;

  // Ejecutar la sentencia SQL
  db.query(sql, [idAeliminar], (err, result) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
    } else {
      console.log('Registro eliminado con éxito');
    }
  });

  const nuevoContenido = req.body.nuevoContenido; // Obtén el nuevo contenido desde la solicitud POST

  // Puedes realizar alguna lógica aquí para actualizar el contenido del contenedor
  // Esto podría incluir guardar el nuevoContenido en la base de datos o realizar otra operación según tus necesidades.

  // Envía una respuesta de éxito
  res.status(200).json({ mensaje: 'Contenido actualizado con éxito' });
});
// Eliminar

// ACTUALIZAR 
// Ruta para servir la página de configuración
app.get('/configuracion', (req, res) => {
  // Asegúrate de que el archivo "configuracion.html" esté en la ubicación correcta
  res.sendFile(__dirname + '/Configuracion.html');
});

// Endpoint para manejar las solicitudes relacionadas con la configuración
app.post('/api/configuracion', (req, res) => {
  // ID del registro que deseas actualizar
  const idActualizar = 1; // Reemplaza esto con el ID real del registro que deseas actualizar

  // Nuevos valores para las columnas
  const nuevoValor1 = 'NuevoValor1'; // Reemplaza con el nuevo valor para columna1
  const nuevoValor2 = 'NuevoValor2'; // Reemplaza con el nuevo valor para columna2
  const nuevoValor3 = 'NuevoValor3'; // Reemplaza con el nuevo valor para columna3

  // Sentencia SQL para actualizar el registro
  const sql = `UPDATE miTabla SET columna1 = ?, columna2 = ?, columna3 = ? WHERE id = ?`;

  // Ejecutar la sentencia SQL
  db.query(sql, [nuevoValor1, nuevoValor2, nuevoValor3, idActualizar], (err, result) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
    } else {
      console.log('Registro actualizado con éxito');
    }
  });

  // Envía una respuesta de éxito
  res.status(200).json({ mensaje: 'Configuración actualizada con éxito' });
});
// ACTUALIZAR 

app.listen(port, () => {
    console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});

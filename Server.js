const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Importar el paquete 'cors'
const port = 3000;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());
app.use(express.json());

// Middleware para analizar datos JSON en las solicitudes
app.use(bodyParser.json());

// Middleware para analizar datos de formularios en las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Configura Express para servir archivos estáticos desde un directorio específico
app.use(express.static(__dirname + '/'));

// app.get('/styles/style.css', (req, res) => {
//   res.setHeader('Content-Type', 'text/css');
//   res.sendFile(__dirname + '/styles/style.css');
// });

// TABLA USUARIOS_DATA
const dbUsuarios = mysql.createConnection({
  host: '72.167.77.8',
  port: 3306,
  user: 'IT_USER',
  password: '{Nd8=[So7Uk3',
  database: 'MY_DATA'
});

dbUsuarios.connect(err => {
  if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
  }
  console.log(`Conectado a la base de datos MySQL USUARIOS_DATA`);
});

// ENDPOINT INICIO SESION O REGISTRO
app.get('/login-signup', (req, res) => {
  res.sendFile(__dirname + '/Login.html');
});

// Ruta para procesar el formulario de registro
app.post('/registro', (req, res) => {
  const { nombre, correo, usuario, clave } = req.body;
  
  // Inserta los datos del usuario en la base de datos
  const sql = 'INSERT INTO USUARIOS_DATA (NOMBRE, CORREO, NOMBRE_USUARIO, CONTRASENA) VALUES (?, ?, ?, ?)';
  dbUsuarios.query(sql, [nombre, correo, usuario, clave], (err, result) => {
    if (err) {
      console.error(err);
      res.send('Error al registrar el usuario');
    } else {
      res.send('Usuario registrado exitosamente');
    }
  });
});
// ENDPOINT INICIO SESION O REGISTRO

// BASE DE DATOS CAMPAÑA
// const dbCampañas = mysql.createConnection({
//   host: '72.167.77.8',
//   port: 3306,
//   user: 'IT_USER',
//   password: '{Nd8=[So7Uk3',
//   database: 'MY_DATA'
// });

// dbCampañas.connect(err => {
//   if (err) {
//       console.error('Error al conectar a la base de datos:', err);
//       return;
//   }
//   console.log(`Conectado a la base de datos MySQL MY_DATA`);
// });

// BASE DE DATOS CGN_LLAMADAS_INBOUND
// Configuración de la base de datos
// const db = mysql.createConnection({
//   host: '72.167.77.8',
//   port: 3306,
//   user: 'IT_USER',
//   password: '{Nd8=[So7Uk3',
//   database: 'DATA_NACIONAL'
// });

// // Conectar a la base de datos
// db.connect(err => {
//   if (err) {
//       console.error('Error al conectar a la base de datos:', err);
//       return;
//   }
//   console.log('Conectado a la base de datos MySQL');
// });

app.post('/login', async (req, res) => {
    // Obtener correo y contraseña del cuerpo de la solicitud
    const { correo, clave } = req.body;

    try {
      // Buscar el usuario por correo en la base de datos
      const result = dbUsuarios.query('SELECT NOMBRE, CORREO, NOMBRE_USUARIO, CONTRASENA FROM USUARIOS_DATA WHERE CORREO = ?', [correo]);
      const usuario = result[0];

      // Verificar si el usuario existe y la contraseña es correcta
      if (usuario && await bcrypt.compare(clave, usuario.CONTRASENA)) {
        // Inicio de sesión exitoso
        res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
        // Aquí también podrías manejar la creación de sesiones o tokens
      } else {
        // Usuario no encontrado o contraseña incorrecta
        res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
  });

// ENDPOINT REGISTRO DATOS
app.post('/registro', async (req, res) => {
  // Obtener los datos enviados desde el cliente
  const { nombre, correo, usuario, clave } = req.body;

  try {
      // Hashear la contraseña antes de almacenarla
      const saltRoundes = 10
      const claveHash = await bcrypt.hash(clave, saltRoundes);

      // Realizar la inserción en la base de datos
      dbUsuarios.query('INSERT INTO USUARIOS_DATA (NOMBRE, CORREO, NOMBRE_USUARIO, CONTRASEÑA) VALUES (?, ?, ?, ?)', 
      [nombre, correo, usuario, claveHash], (error, results) => {
          if (error) {
              // Error en la inserción
              console.error(error);
              res.status(500).json({ success: false, message: 'Error en la inserción' });
          } else {
              // Inserción exitosa
              console.log('Registro exitoso');
              res.status(200).json({ success: true, message: 'Registro exitoso' });
          }
      });
  } catch (error) {
      console.error('Error al hashear la contraseña:', error);
      res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});
  // ENDPOINT REGISTRO DATOS

// Endpoint 5 registros
app.get('/5/registros', (req, res) => {
  const query = 'SELECT * FROM CGN_LLAMADAS_INBOUND LIMIT 5'; 

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
// Endpoint 5 registros

// Endpoint 10 registros
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

// Endpoint nacionales
app.get('/nacionales', (req, res) => {
  res.sendFile(__dirname + '/Nacional.html');
});
// Endpoint nacionales

// Endpoint internacionales
app.get('/internacionales', (req, res) => {
  res.sendFile(__dirname + '/Internacional.html');
});
// Endpoint internacionales

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

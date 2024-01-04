const express = require('express');
// const { engine } = require('express-handlebars');
// const myConnection = require('express-myconnection');
// const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const mysql = require('mysql');
const cors = require('cors'); // Importar el paquete 'cors'

app.use(cors());
app.use(express.json());

// Middleware para analizar datos JSON en las solicitudes
app.use(bodyParser.json());

// Middleware para analizar datos de formularios en las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));  

// Configura Express para servir archivos estáticos desde un directorio específico
app.use(express.static(__dirname + '/'));

// Motor de plantilla
app.set('view engine', 'ejs');

// bcrypt
const bcryptjs = require('bcryptjs');

// Var de session
const session = require('express-session');
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

const dbYearAndMonth = mysql.createConnection({
  host: '72.167.77.8',
  port: 3306,
  user: 'IT_USER',
  password: '{Nd8=[So7Uk3',
  database: 'MY_DATA'
});

dbYearAndMonth.connect(err => {
  if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
  }
  console.log(`Conectado a la base de datos MySQL USUARIOS_DATA con las tablas CRECIMIENTO_ANO Y CRECIMIENTO_MES`);
});

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
// ENDPOINT INICIO SESION O REGISTRO

app.post('/login', async (req, res) => {
  const { correo, clave } = req.body;

  try {
      // Buscar al usuario por correo electrónico
      dbUsuarios.query('SELECT * FROM USUARIOS_DATA WHERE CORREO = ?', [correo], async (error, results) => {
          if (error) {
              return res.status(500).json({ success: false, message: 'Error en la base de datos' });
          }

          // Si no se encuentra el usuario o la contraseña no coincide
          if (!results.length || !(await bcryptjs.compare(clave, results[0].CONTRASENA))) {
              return res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
          }

          // Usuario autenticado con éxito
          console.log('Login exitoso');
          res.status(200).json({ success: true, message: 'Login exitoso' });
      });
  } catch (error) {
      console.error('Error en el login:', error);
      res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

// Ruta para procesar el formulario de registro
app.post('/registro', async (req, res) => {
  const { nombre, correo, usuario, clave } = req.body;

  try {
      let passwordHash = await bcryptjs.hash(clave, 8);

      dbUsuarios.query('INSERT INTO USUARIOS_DATA (NOMBRE, CORREO, NOMBRE_USUARIO, CONTRASENA) VALUES (?, ?, ?, ?)', 
      [nombre, correo, usuario, passwordHash], (error, results) => {
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
// Ruta para procesar el formulario de registro

// ENDPOINT DEL GRÁFICO
app.get('/chart-data', (req, res) => {
  // Consulta a la base de datos
  let sql = 'SELECT ANO, NUM_ANO, NUM_MES FROM ANO_MES';
  dbYearAndMonth.query(sql, (err, result) => {
      if (err) throw err;

      // Enviar los resultados como JSON
      res.json(result);
  });
});
// ENDPOINT DEL GRÁFICO

// BASE DE DATOS CAMPAÑA
const dbCampañas = mysql.createConnection({
  host: '72.167.77.8',
  port: 3306,
  user: 'IT_USER',
  password: '{Nd8=[So7Uk3',
  database: 'MY_DATA'
});

dbCampañas.connect(err => {
  if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
  }
  console.log(`Conectado a la base de datos MySQL MY_DATA`);
});

// BASE DE DATOS CGN_LLAMADAS_INBOUND
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



// ENDPOINT REGISTRO DATOS
app.post('/registro', async (req, res) => {
  const { nombre, correo, usuario, clave } = req.body;

  try {
      let passwordHash = await bcryptjs.hash(clave, 8); // Asegúrate de que bcryptjs está correctamente importado

      dbUsuarios.query('INSERT INTO USUARIOS_DATA SET ?', { nombre: nombre, correo: correo, usuario: usuario, contrasena: passwordHash }, 
      (error, results) => {
          if (error) {
              console.error(error);
              res.status(500).json({ success: false, message: 'Error en la inserción' });
          } else {
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
  res.render('nacional')
});
// Endpoint nacionales

// Endpoint internacionales
app.get('/internacionales', (req, res) => {
  res.render('internacional');
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

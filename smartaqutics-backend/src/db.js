const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Coloca aquí tu contraseña de MySQL
  database: 'smartaqutics',
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos con el id:', connection.threadId);
});

module.exports = connection;

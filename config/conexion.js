const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const conexion = mysql.createConnection({

  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,


});

conexion.connect((err) => {
  if (err) {
    console.log('ha ocurrido un error:' + err)
  }
  else {
    console.log('la base de datos se conecto !!!')
  }

});

module.exports = conexion;





require('./config/conexion');
const express = require('express')
const cors = require('cors')
const host = '0.0.0.0';

const port = (process.env.PORT || 3000);

// express
const app = express();

//admitir
app.use(express.json())

// cors
app.use(cors())

//configurar
app.set('port', port)

//rutas
app.use('/api', require('./rutas'))


//inicializar express
app.listen(app.get(port, host), (error) => {
  if (error) { console.log('error al iniciar el servidor: ' + error) }
  else {
    console.log('servidor iniciado en el puerto: ' + port)
  }
})
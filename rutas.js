const router = require('express').Router()
const conexion = require('./config/conexion')

//---------- agregamos rutas--------
//get movie
router.get('/', (req, res) => {
  let sql = 'select * from movie'
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows)
    }
  })

})

// get un id
router.get('/:id', (req, res) => {
  const { id } = req.params
  let sql = 'select * from movie where mov_id = ?'
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows)
    }
  })
})
//agregar


router.post("/", (req, res) => {
  console.log(req)
  const { mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } = req.body

  let sql = ` insert into movie (mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) values('${mov_title}', '${mov_year}', '${mov_time}', '${mov_lang}', '${mov_dt_rel}', '${mov_rel_country}')`;



  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: 'Película agregada' });
    }
  });
});


//eliminar 

router.delete('/:id', (req, res) => {
  const { id } = req.params

  let sql = `delete from movie where mov_id = '${id}'`
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err
    else {
      res.json({ status: 'pelicula eliminada' })
    }
  })
});


//modificar
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } = req.body

  let sql = `update movie set 
              mov_title='${mov_title}',mov_year='${mov_year}',mov_time='${mov_time}',mov_lang='${mov_lang}',mov_dt_rel='${mov_dt_rel}',mov_rel_country='${mov_rel_country}'
              
              where mov_id = '${id}'`

  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err
    else {
      res.json({ status: 'pelicula modificado' })
    }
  })

})



/* //asignamo(s todas las rutas 
rutas.get('/', function (req, res) {
  res.send('hola desde rutas/inicio')
}); */

module.exports = router;

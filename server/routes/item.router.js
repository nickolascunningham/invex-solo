const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route temp late
 */
router.get('/', (req, res) => {
  const queryString = `SELECT * FROM items`;
  pool.query( queryString ).then( (results)=>{
    res.send( results.rows );
  }).catch( (err)=>{
    console.log("error get items", err );
    res.sendStatus( 500 );
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const queryString = `INSERT INTO items (title, description, category, user_id) VALUES ( $1, $2, $3, $4 ) RETURNING *;`;
  const values = [ req.body.title, req.body.description, req.body.category, req.body.user_id ];
   pool.query( queryString, values).then( (results)=>{
    res.send(results.rows[0]);
  }).catch( (err)=>{
    console.log("error post items", err );
    res.send(err);
  })
});

router.delete("/:id", (req, res) => {
  const id = req.params.id
    const queryString =  `DELETE FROM items WHERE id = $1 `
    pool.query(queryString, [id])
    .then(() => res.send("deleted"))
    .catch( (err)=>{
      console.log("error get items", err );
      res.sendStatus( 500 );
    })
})

/**
 * PUT route template
 */
 router.put('/:id', (req, res) => {
  const id = req.params.id
  const queryString = `UPDATE "items" SET title = $1, description = $2 WHERE id = $3 RETURNING *`;
  const values = [ req.body.title, req.body.description, id];
   pool.query( queryString, values ).then( (results)=>{
    res.send( results.rows[0] );
  }).catch( (err)=>{
    console.log("error puy  items", err );
    res.sendStatus( 500 );
  })
});




module.exports = router;

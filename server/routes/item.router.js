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
  const queryString = `INSERT INTO "items" (title, description, category) VALUES ( $1, $2, $3 );`;
  values = [ req.body.title, req.body.description, req.body.category ];
   pool.query( queryString, value ).then( (results)=>{
    res.sendStatus( 200 );
  }).catch( (err)=>{
    console.log("error post items", err );
    res.sendStatus( 500 );
  })
});

/**
 * PUT route template
 */
//  router.put('/', (req, res) => {
//   const queryString = `UPDATE "items" SET `;
//   values = [ req.body.title, req.body.description, req.body.category_id ];
//    pool.query( queryString, value ).then( (results)=>{
//     res.sendStatus( 200 );
//   }).catch( (err)=>{
//     console.log("error puy  items", err );
//     res.sendStatus( 500 );
//   })
// });


module.exports = router;

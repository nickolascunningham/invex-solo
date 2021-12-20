const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route temp late
 */
router.get('/', (req, res) => {
  const queryString = `SELECT * FROM categories`;
  pool.query( queryString ).then( (results)=>{
    res.send( results.rows );
  }).catch( (err)=>{
    console.log("error get categories", err );
    res.sendStatus( 500 );
  })
});


module.exports = router;


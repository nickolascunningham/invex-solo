const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route temp late
 */
router.get("/", (req, res) => {
  const queryString = `SELECT * FROM bag`;
  pool
    .query(queryString)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log("error get bags", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", async (req, res) => {
  try {
    const id = req.body.id;

    const existingBags = await pool.query(`SELECT * FROM bag WHERE id = $1`, [
      id,
    ]);

    if (existingBags.rows.length > 0) {
      res.send("ERROR");
    } else {
      const queryString = `INSERT INTO bag (id, title, description, category, user_id) VALUES ( $1, $2, $3, $4 ,$5) RETURNING *;`;
      const values = [
        req.body.id,
        req.body.title,
        req.body.description,
        req.body.category,
        req.body.user_id,
      ];
      const postBag = await pool.query(queryString, values);

      res.send(postBag.rows[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id
    const queryString =  `DELETE FROM bag WHERE id = $1 `
    pool.query(queryString, [id])
    .then(() => res.send("deleted"))
    .catch( (err)=>{
      console.log("error delete bag", err );
      res.sendStatus( 500 );
    })
})


module.exports = router;

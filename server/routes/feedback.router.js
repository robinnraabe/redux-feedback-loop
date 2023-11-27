const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET feedback
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM feedback`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error retrieving from database:`, error);
            res.sendStatus(500);
        });
});

// POST feedback
router.post('/', (req, res) => {
    console.log('POST req.body:', req.body);
    const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [req.body.feelings, req.body.understanding, req.body.support, req.body.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error adding to database:`, error);
            res.sendStatus(500);
        });
});

module.exports = router;
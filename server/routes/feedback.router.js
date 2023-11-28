const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET feedback
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM feedback ORDER BY id DESC;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error retrieving from database:', error);
            res.sendStatus(500);
        });
});

// DELETE feedback
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM feedback WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error deleting item from database:', error);
            res.sendStatus(500);
        });
})

// POST feedback
router.post('/', (req, res) => {
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [req.body.feelings, req.body.understanding, req.body.support, req.body.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error adding item to database:', error);
            res.sendStatus(500);
        });
});

// PUT feedback
router.put('/:id', (req, res) => {
    const queryText = `UPDATE feedback SET flagged = NOT flagged WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error updating item in database:', error);
            res.sendStatus(500);
        });
})

module.exports = router;
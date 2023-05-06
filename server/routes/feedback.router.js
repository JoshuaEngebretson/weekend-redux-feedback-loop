const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    pool.query('SELECT * from "feedback";')
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((dbErr) => {
        console.log('Error GET /feedback', dbErr)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    const feedback = req.body;

    sqlText = `
        INSERT INTO feedback
        ("feeling", "understanding", "support", "comments")
        VALUES
        ($1, $2, $3, $4);
    `;

    sqlValues = [
        feedback.feeling,
        feedback.understanding,
        feedback.support,
        feedback.comments
    ];

    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            // Send "Created" status
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            // On Error, log the error
            console.log('Error with POST /feedback request:', dbErr);
            // Send "Internal Server Error" status to client
            res.sendStatus(500)
        })
})

module.exports = router;
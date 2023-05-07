const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET Route
router.get('/', (req, res) => {
    // Get everything from database
    // sorted by most recent date followed by
    // highest id (most recent)
    const sqlText =`
        SELECT * from "feedback"
            ORDER BY date DESC, id DESC;
    `;

    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((dbErr) => {
        poolError(res, 'GET /feedback', dbErr)
    });
}) // End GET Route

// POST Route
router.post('/', (req, res) => {
    const feedback = req.body;

    const sqlText = `
        INSERT INTO feedback
        ("feeling", "understanding", "support", "comments")
        VALUES
        ($1, $2, $3, $4);
    `;

    const sqlValues = [
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
            poolError(res, 'POST /feedback', dbErr)
        })
}) // End POST Route

// DELETE Route
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    // Delete the item with id from the gallery
    const sqlText = `
        DELETE FROM feedback
            WHERE id=$1;
    `;

    pool.query(sqlText, [id])
        .then((dbRes) => {
            // On successful deletion within the database,
            //   send "Okay status"
            res.sendStatus(200)
        })
        .catch((dbErr) => {
            poolError(res, 'DELETE /feedback/:id', dbErr)
        })
}) // End DELETE Route

// PUT Route to add flag
router.put('/flag/:id', (req, res) => {
    const id = req.params.id;

    let sqlText;

    if (req.body.addFlag) {
        sqlText = `
            UPDATE feedback
                SET flagged = true
                WHERE id=$1;
        `;
    }
    else if (req.body.removeFlag) {
        sqlText = `
            Update feedback
                Set flagged = false
                WHERE id=$1
        `;
    }

    pool.query (sqlText, [id])
        .then((dbRes) => {
            // On successful update within the database,
            //   send "Okay status"
            res.sendStatus(200)
        })
        .catch((dbErr) => {
            poolError(res, 'PUT /feedback/flag/:id', dbErr)
        })
}) //End PUT Route to add/rmove flag

// PUT Route to remove flag
router.put

const poolError = (res, routeTypeAndRoute, err) => {
    // On Error, log the error
    console.log(`Error with ${routeTypeAndRoute} request:`, err);
    // Send "Internal Server Error" status to client
    res.sendStatus(500)
} // End poolError


module.exports = router;
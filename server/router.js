const express = require('express');
const router = express.Router();
const pool = require('./modules/pool.js');


// Get all info from database
router.get('/', (req, res) => {
    let queryText = 'SELECT title, author FROM "feedback" ORDER BY "date" ';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      console.log(results ,'this is the results')
      res.send(result.rows); // request for rows
    })
    .catch(error => {
      console.log('error getting info', error);
      res.sendStatus(500);
    });
  });



 
router.post('/',  (req, res) => {
    let newFeedback = req.body; // this will have the value of our new feedback inserted by the user
    console.log('this is the new feedback', newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments" )
                      VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support,newFeedback.comments])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log('Error adding new feedback', error);
        res.sendStatus(500);
      });
  });


  
  module.exports = router; // exports to server


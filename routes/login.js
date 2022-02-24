const express = require("express")
const cors = require("cors");
var mysql = require('mysql');
const app = express()
const router = express.Router()

var con = mysql.createConnection({
    host: "107.180.1.16",
    user: "sprog20223",
    password: "sprog20223",
    database: 'sprog20223'
  });

  function getValuesFromQuery (rows) {
      var       values ;
      values =  rows;
      console.log(values);
      return    rows;
  }


// router.post('/', function (req, res) {
//     console.log("login attempted.")
//     let isLoggedIn = false
//     if (req.body.username == 'shirelyfe@hobbit.net' && req.body.password == '1ring') {
//         isLoggedIn = true
//         console.log(`user: ${req.body.username} logged in`)
//         res.redirect('/home')
//     } else {
//         console.log("failed login.")
//         res.render("index", { username: req.body.username })
//     }
// })

router.post('/', function (req, res) {

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    console.log("login attempted.")
    let isLoggedIn = false

    let email = req.body.username;
    let password = req.body.password;
    let query = `SELECT userID FROM Users WHERE 
                 email = '${email}' AND 
                 password = '${password}' ;`
    var returnedID;

    con.query(query, function selectAll(err,rows) {
        if(err) {
            throw err; }

        console.log('Data received from DB:');
        console.log(rows);
        getValuesFromQuery(rows);
    })

    con.end();
})


module.exports = router
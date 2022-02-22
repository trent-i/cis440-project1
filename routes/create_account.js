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

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

router.get('/', function(req, res) {
    res.render('Create_Account')
})

router.post('/', function(req, res) {
    // console.log(req.body.firstName)
    const data = req.body;
  
  let Fname    =  data.firstName
  let Lname    =  data.lastName
  let Email    =  data.email
  let Password =  data.password
  let query =`INSERT INTO Users ( Fname,Lname, Email, Password ) VALUES
  ( '${Fname}', '${Lname}', '${Email}', '${Password}');`

    // This is the data from the create account page input felds it's in json format)
    console.log("Data: ", data)

  // querys the database
  con.query(query, (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
    res.json(rows)
  });

})

app.use(cors());
app.use(express.json());


module.exports = router
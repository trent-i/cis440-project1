const express = require("express")
const cors = require("cors");
var mysql = require('mysql');
const app = express()
const router = express.Router()

router.get('/', function(req, res) {
    res.render('add_pet')
})

router.post('/', function(req, res) {
    res.send('add code to connect to database then add pet to database.')
})

app.use(cors());
app.use(express.json());


module.exports = router
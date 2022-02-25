const express = require("express")
const cors = require("cors");
var mysql = require('mysql');
const app = express()
const router = express.Router()

router.get('/', function(req, res) {
    res.render('start_walk')
})

app.use(cors());
app.use(express.json());


module.exports = router
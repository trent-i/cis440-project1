const express = require("express")
const cors = require("cors");
var mysql = require('mysql');
const app = express()
const router = express.Router()

router.get("/", function(req, res) {
    res.render("home")
})

router.get('/:userId', function(req, res) {
    
})

module.exports = router
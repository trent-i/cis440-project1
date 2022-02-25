const express = require("express")
const cors = require("cors");
var mysql = require('mysql');
const app = express()
const router = express.Router()

router.get("/", function(req, res) {
    res.render("home")
    console.log('directed user to homepage.')

    var userID = req.query.userid
    console.log("userID from homepage: ", userID)

    // use the userID variable to query db for pet list 
})


module.exports = router
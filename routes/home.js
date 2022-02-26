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

router.get("/", function(req, res) {
    var pets;
    var userID = req.query.userid
    console.log("userID from homepage: ", userID)

    console.log('directed user to homepage.');

    // use the userID variable to query db for pet list 
    function getPets(userID, callback) {
        con.query(`SELECT * FROM Pets WHERE 
                 userID = '${userID}' ;`, function (err, result) {
            if (err) {
                callback(err, null)
            } else callback(null, result)
        })
    }

    getPets(userID, function(err, data) {
        if (err) {
            console.log("ERROR: ", err)
        } else {
            pets = data;
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].Name)             
            }
            res.render("home", {pet0: pets[0].Name});
        }
        con.end();
    })

})

function printPets (data) {
    const table = document.createElement("table");
    for (let i = 0; i < data.length; i++) {
        var row = table.insertRow(i+1);
        var nameCell = row.insertCell(0);
        nameCell.innerHTML = data[i].name;
    }
    const element = req.body.petsTable;
    element.appendChild(table);
}

module.exports = router
const express = require("express")
const router = express.Router()

router.post('/', function (req, res) {
    console.log("login attempted.")
    let isLoggedIn = false
    if (req.body.username == 'shirelyfe@hobbit.net' && req.body.password == '1ring') {
        isLoggedIn = true
        console.log(`user: ${req.body.username} logged in`)
        res.redirect('/home')
    } else {
        console.log("failed login.")
        res.render("index", { username: req.body.username })
    }
})


module.exports = router
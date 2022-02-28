const express = require('express')
var mysql = require('mysql');
const cors = require("cors");
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get("/", function(req, res) {
    console.log("app loaded successfully.")
    res.render('index')
})

var con = mysql.createConnection({
    host: "107.180.1.16",
    user: "sprog20223",
    password: "sprog20223",
    database: 'sprog20223'
  });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

app.use(cors());
app.use(express.json());

const homeRouter = require('./routes/home')
const createAccountRouter = require('./routes/create_account')
const loginRouter = require('./routes/login')
const walkRouter = require('./routes/start_walk')
const addPetRouter = require('./routes/add_pet')
const oldWalkRouter = require('./routes/old_walks')

app.use('/home', homeRouter)
app.use('/create_account', createAccountRouter)
app.use('/login', loginRouter)
app.use('/start_walk', walkRouter)
app.use('/add_pet', addPetRouter)
app.use('/old_walks', oldWalkRouter)

app.listen(3000)


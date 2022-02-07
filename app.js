const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const db = require('./config/dbContext');
var cookieParser = require('cookie-parser')

app.use(cors());

const loginRoute = require('./routes/login')
const homeRoute = require('./routes/home')
const signupRoute = require('./routes/signup')


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

db.connect();
app.use(cookieParser());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname + "/public")));


app.use('/login', loginRoute)
app.use('/signup', signupRoute)
app.use('/', homeRoute)



app.listen(5000, ()=>{
    console.log('Our app listening at port http://localhost:5000');
})
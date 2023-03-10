//Dependancies:
require('dotenv').config();
const express = require("express")
const app = express()
const mongoose = require('mongoose');
const Task = require("./models/tasks.js")
const session = require('express-session')
const methodOverride = require("method-override")
const taskController = require("./controllers/tasks")
const userController = require("./controllers/users.js")
const SECRET = process.env.SECRET
const path = require("path")

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set("strictQuery", true) //required for it to deploy
mongoose.connect(MONGODB_URI,{
    useNewURLParser: false,
})


// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
//Body parser: Add JSON data from request to the request object
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
      secret: SECRET,
      resave: false, 
      saveUninitialized: false
    }))
app.use(methodOverride("_method"))
app.use("/project", taskController)
app.use("/users", userController)
  

app.get("/", (req,res)=>{
  res.render("home.ejs")
})

//Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));


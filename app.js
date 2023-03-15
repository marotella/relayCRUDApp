//Dependancies:
require('dotenv').config(); //Allows app to access info in .env 
const express = require("express")  
const app = express()
const mongoose = require('mongoose');
const Task = require("./models/tasks.js")
const session = require('express-session')
const methodOverride = require("method-override")
const taskController = require("./controllers/tasks") //controller for task routes
const userController = require("./controllers/users.js") //controller for user routes for authentication
const SECRET = process.env.SECRET //need the secret for authorization
const path = require("path") // makes sure public files are available and rendering 

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI; //makes my MongoDB Atlas URI available 
mongoose.set("strictQuery", true) //required for it to deploy on heroku
mongoose.connect(MONGODB_URI,{
    useNewURLParser: false,
})


// Database Connection Error/Success
// Define callback functions for various events so I know errors
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
app.use(methodOverride("_method")) //allows us to use delete and other methods
app.use("/project", taskController)
app.use("/users", userController)
  
//HOME ROUTE that displays key links to access the rest of the application such as login, create an account, sign out, and a project view 
app.get("/", (req,res)=>{
  res.render("home.ejs")
})

//Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));


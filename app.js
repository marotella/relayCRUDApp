//Dependancies:
require('dotenv').config();
const express = require("express")
const app = express()
const mongoose = require('mongoose');
const methodOverride = require("method-override")


// Database Connection
mongoose.connect(process.env.DATABASE_URL);

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
//Body parser: Add JSON data from request to the request object
app.use(express.json())
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

//ROUTES and CONTROLLERS


//INDEX
app.get("/project", (req, res)=> {
    
    res.send("Index Page")
    console.log("index route running")
})

//NEW

//DELTE

//UPDATE

//CREATE

//EDIT

//SHOW


//Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));
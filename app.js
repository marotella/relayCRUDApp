//Dependancies:
require('dotenv').config();
const express = require("express")
const app = express()




//Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));
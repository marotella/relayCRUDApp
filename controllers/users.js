const express = require("express")
const router = express.Router()
const User = require("../models/users")
const bcrypt = require("bcrypt")

router.get("/register", (req, res)=>{
    res.render("users/register.ejs")
})




router.get("/signin", (req, res)=>{
    res.render("users/signin.ejs")
})

module.exports = router
const express = require("express")
const router = express.Router()
const User = require("../models/users")
const bcrypt = require("bcrypt")

router.get("/register", (req, res)=>{
    res.render("users/register.ejs")
})

router.post("/register", (req, res)=> {
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    console.log(req.body)
    User.findOne({username: req.body.username}, (err,userExists)=> {
        if(userExists){
            res.send("That user name already exists.")
        }else {
            User.create(req.body, (err, createdUser)=>{
                console.log(createdUser)
                res.redirect("/project")
            })
        }
    })
})


router.get("/signin", (req, res)=>{
    res.render("users/signin.ejs")
})

module.exports = router
const express = require("express")
const router = express.Router()
const User = require("../models/users") //allows us to access the users.
const bcrypt = require("bcrypt") //this allows us to encrypt user information for secuirty purposes


//NEW - This displays a form that allows a user to create an account in the system.
router.get("/register", (req, res)=>{
    res.render("users/register.ejs")
})


//Create  - This route creates the account in the system using the data collected on the register ejs form using the schemam in users.js
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
                req.session.currentUser = createdUser
                res.redirect("/project")
            })
        }
    })
})

//This route displays a form that allows a user to login to their account so that they can access routes that require authorization.

router.get("/signin", (req, res)=>{
    res.render("users/signin.ejs")
})


//This route creates the session for the user once they log in that can be used to access different levels of the account.
router.post("/signin", (req,res)=>{
    User.findOne({username: req.body.username}, (err,foundUser)=>{
        if(foundUser){
            const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
            if (validLogin){
                req.session.currentUser=foundUser
                res.redirect("/project")
            }else{
                res.send("Invalid username and/or password.")
            }

        }else{
            res.send("Invalid username and/or password.")
        }
    })
})

//This route ends the session for the user and signs them out of the account. It directs them back to the homepage.
router.get("/signout", (req, res)=>{
    req.session.destroy()
    res.redirect("/") //redirect back to the homepage
})

module.exports = router
const express = require("express")
const router = express.Router()
const Task = require("../models/tasks.js") 

//ROUTES and CONTROLLERS

//custom middle ware
const authRequired= (req, res, next) => {
    console.log(req.session)
    if(req.session && req.session.currentUser){
        next() //part of express
    }else{
        res.redirect("/users/signin")
        //or redirect to a sign in or registered page?
    }
}
const adminAuthRequired= (req, res, next) => {
    if(req.session.currentUser.role === "Project Lead"){
        next() //part of express
    }else{
        res.redirect("/users/signin")
        //or redirect to a sign in or registered page?
    }
}

//INDEX
router.get("/", (req, res) => {
    Task.find({}, (err, foundTasks) => {
        if (err) { console.log(err.message) }
        res.render('index.ejs', {
            tasks: foundTasks
        })
    })
    console.log("index route running")
})

//NEW

router.get("/new", authRequired, (req, res) => {
    res.render("new.ejs")
})

//DELETE
router.delete("/:id", adminAuthRequired, (req, res) => {
    {
        Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
            if (err) { console.log(err.message) }
            else {
                console.log(deletedTask)
                res.redirect("/project")
            }
        })
    }
})

//UPDATE
router.put('/:id', (req, res) => {
	
	if (req.body.blocker === "on") {
		req.body.blocker = true
	} else {
		req.body.blocker = false
	}

	Task.findByIdAndUpdate(req.params.id, req.body, { new: true}, 
	(err, updatedTask) => {
		if(err) {
			console.log(err)
			res.send(err)
		} else {
			console.log(updatedTask)
			// redirect to the index route 
			res.redirect('/project')
		}

	})
})


//CREATE
router.post("/", (req, res) => {
    if (req.body.blocker === "on") {
        req.body.blocker = true;
    } else {
        req.body.blocker = false;
    }
    Task.create(req.body, (err, createdTask) => {
        if (err) {
            console.log(err.message)
            res.send(error)
        } else {
            console.log(createdTask, "Created New Task")
            res.redirect("/project")
        }
    })
})


//EDIT
router.get("/:id/edit", (req, res) => {
    Task.findById(req.params.id, (err, foundTask) => (
        res.render("edit.ejs",
            { task: foundTask })
    ))
})

//SHOW
router.get("/:id", (req, res) => {
    Task.findById(req.params.id, (err, foundTask) => {
        if (err) {
            console.log(error)
        } else {
            res.render("show.ejs", {
                task: foundTask
            })
        }
    })
})

module.exports = router
const express = require("express")
const router = express.Router()
const Task = require("../models/tasks.js") 

//ROUTES and CONTROLLERS

//custom middle ware for user access 
const authRequired= (req, res, next) => {
    console.log(req.session)
    if(req.session && req.session.currentUser){
        next() //part of express
    }else{
        res.redirect("/users/signin")
        //or redirect to a sign in or registered page?
    }
}

//custom middleware for Admin access
const adminAuthRequired= (req, res, next) => {
    if(req.session.currentUser && req.session.currentUser.role === "Project Lead"){
        next(); //part of express
    }else{
        res.redirect("/users/signin");
    }
};

//INDEX - Shows the projects view with specific listed features 
router.get("/", (req, res) => {
    Task.find({}, (err, foundTasks) => {
        if (err) { console.log(err.message) }
        res.render('index.ejs', {
            tasks: foundTasks
        })
    })
    console.log("index route running")
})

//NEW allows you to make a new task if you are logged into the account if not it redirects to the login page 

router.get("/new", authRequired, (req, res) => {
    res.render("new.ejs")
})

//DELETE allows users with admin access to delete routes from the project if not it redirects to the login page 
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

//UPDATE takses the data entered in the edit pages and updates the object to reflect the new data.
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


//CREATE takes the information from the form on the new page and generates a new task for the project based on the data entered.
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


//EDIT this displays a form that allows a user who is logged in to enter information for a new task 
router.get("/:id/edit",authRequired, (req, res) => {
    Task.findById(req.params.id, (err, foundTask) => (
        res.render("edit.ejs",
            { task: foundTask })
    ))
})

//SHOW this displays all of the key value pairs for a task when you select the task on the the index page 
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
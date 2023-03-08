const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema ({
    title: String,
    owner: String,
    progress: String,
    update: String,
    blocker: Boolean
})


const Task = mongoose.model("Task", taskSchema)

module.exports=Task
const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema ({
    title: String,
    owner: String,
    progress: String,
    due: Date,
    update: String,
    blocker: Boolean
})


const Task = mongoose.model("Task", taskSchema)

module.exports=Task
const mongoose = require("mongoose")


//This schema is used to create tasks and requires title, owner, and due date to be created to display.
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    owner: { type: String, required: true },
    progress: String,
    due: { type: Date, required: true },
    update: String,
    blocker: Boolean
})


const Task = mongoose.model("Task", taskSchema)

module.exports = Task
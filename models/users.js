const mongoose = require('mongoose')
const Schema = mongoose.Schema


//This is the schema used to create users for the account making sure the the username is unique and all fields are submitted to create an account.
const userSchema = Schema({
    username: { type: String, unique: true, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
})

const User = mongoose.model("User", userSchema)

module.exports = User
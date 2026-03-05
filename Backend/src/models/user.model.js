const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true, "Username is required" ],
        unique: [ true, "Username must be unique" ]
    },
    email: {
        type: String,
        required: [ true, "Email is required" ],
        unique: [ true, "Email must be unique" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ],
        select:false // a better approach than doing .select('-password'): WONT READ PASSWORD WHEN READING USER DATA 
    }// ALONG WITH THIS IN LOGINCONTROLLER DO : const user= await userModel.findOne().select('+password') "+" because it was excluded at schema level
})

// TASK
// userSchema.pre("save", function (next) { })
// userSchema.post("save", function (next) { })


const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
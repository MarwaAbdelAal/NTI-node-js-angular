const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/s10g21p2")
const userModel = require("./database/models/user.model")

// const data = new userModel({
    // name:"marwa",
    // email: "marwa@test.com",
    // password: "jskajsksal",
    // age: 23,
    // gender: "female"
// })
// 
// data.save().then(result => console.log(result)).catch(e => console.log(e.message))

userModel.find().then(res=> console.log(res)).catch(e => console.log(e.message))
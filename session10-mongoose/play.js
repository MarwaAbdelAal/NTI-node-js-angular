const mongoose = require("mongoose")
const myDBURL = "mongodb://127.0.0.1:27017/g21s10"
mongoose.connect(myDBURL) // connection done

const userModel = mongoose.model("userModel", {
    name:{
        type: String, 
        trim: true
    },
    age:{
        type: Number
    },
    email:{
        type: String, 
        trim: true
    }
})
// const myData = new userModel({name:"marwa", age:22, email:"marwa@test.com"})
// console.log(myData)
// myData.save()
// .then(res => console.log(res))
// .catch(e => console.log(e.message))
// 
userModel.find().then(res=> console.log(res)).catch(e => console.log(e.message))
const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({
    name:{
        type:String, 
        required:true, 
        trim:true
    },
    email:{
        type:String, 
        required:true, 
        trim:true, 
        unique:true
    },
    password:{ 
        type:String, 
        required:true, 
        trim:true 
    },
    status:{ 
        type:Boolean, 
        default:false 
    },
    age:{ 
        type:Number, 
        min:21, 
        max:60, 
        default:21 
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
    }, 
    { 
        timestamps:true 
    }
)

userSchema.methods.toJSON =  function(){
    const deleted = ["__v", "password", "tokens"]
    const userData = this.toObject()
    deleted.forEach(d => delete userData[d])
    return userData
}

userSchema.pre("save", async function(){
    const userData = this
    if (userData.isModified("password"))
        userData.password = await bcryptjs.hash(userData.password, 10)
})

// method => full object , static=> specefic constraints
userSchema.statics.login = async(email, password) =>{
    const userData = await User.findOne({email})
    if (!userData) throw new Error("invalid email")
    const matched = await bcryptjs.compare(password, userData.password)
    if(!matched) throw new Error("wrong password")
    return userData
}
// arrow fn. doesn't take "this"
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWTKEY)
    console.log(token)
    user.tokens = user.tokens.concat({token})
    console.log(user)
    await user.save()
    return token
}

const User = mongoose.model("User", userSchema)
module.exports = User
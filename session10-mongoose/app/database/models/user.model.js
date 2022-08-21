const mongoose = require("mongoose")
const validator = require("validator")
const User = mongoose.model("User", {
    name: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email")
        }
    },
    password:{
        type: String,
        trim: true,
        required: true,
        minlength: 6,
        match: /^/,
        validate(value){
            if(value.includes("password") || value.includes("123") || value.includes(this.name)) throw new Error("weak password")
        }
    },
    age:{
        type: Number,
        min: 20,
        max: 60,
        required: true
    },
    gender:{
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        enum: ["male", "female"]
    },
    status:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    addresses:[{
        addrType:{type: String, trim: true, required: true},
        addrDetails:{type: String, trim: true, required: true}
    }]
})

module.exports = User
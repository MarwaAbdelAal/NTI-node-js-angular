const userModel = require("../database/models/user.model")
const bcryptjs = require("bcryptjs")
class User {
    static index = async(req, res)=>{ 
        try{
            const data = await userModel.find()
            res.send({ apiStatus:true, message:"all users fetched", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }
    }
    static create = async(req, res) =>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.send({ apiStatus:true, message:"user registered", data: userData }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }
    }
    static single = async(req, res)=>{
        try{
            const data = await userModel.findById(req.params.id)
            res.send({ apiStatus:true, message:"Single user fetched", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }

    }
    static edit = async(req, res)=>{
        try{
            const data = await userModel.findByIdAndUpdate(
                req.params.id,
                req.body, 
                {runValidators:true}
            )
            res.send({ apiStatus:true, message:"User updated", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }

    }
    static delete = async(req, res)=>{
        try{
            const data = await userModel.findByIdAndDelete(req.params.id)
            res.send({ apiStatus:true, message:"User deleted", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }
    }
    static login = async(req, res)=>{
        try {
            const userData = await userModel.login(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.send({ 
                apiStatus:true, 
                message:"User logged in", 
                data: { userData, token }
            })             
        } 
        catch (e) {
            res.send({ apiStatus: false, message: e.message, data:e})
        }
    }
    static profile = async(req, res)=>{
        res.send({
            apiStatus:true, 
            message:"done", 
            data: req.user
        })
    }
    static activate = async(req, res)=>{
        try{
            req.user.status = true
            await req.user.save()
            res.send({
                apiStatus:true, 
                message:"done", 
                data: req.user
            })
        }
        catch(e){
            res.send({ apiStatus: false, message: e.message, data: e})
        } 
    }

}
module.exports=User
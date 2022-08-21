const userModel = require("../database/models/user.model")

class User {
    static addPost = (req, res)=>{
        res.render("addPost", {pageTitle: "Add user post"})
    }
    static addPostLogic = async(req, res)=>{
        try {
            const userData = new userModel(req.body)
            await userData.save()
            res.redirect("/")
        } 
        catch (e) {
            res.send(e)
            // res.render("addPost", {e: e.errors, pageTitle: "Add user", data: req.body})
        }
    }
    static all = async(req, res)=>{
        try {
            const users = await userModel.find()
            res.render("all", {
                pageTitle: "all Users",
                users: users,
                hasUsers: users.length
            })
        } 
        catch (e) {
            res.send(e.message)            
        }
    }
    static edit = async(req, res)=>{
        const userId = req.params.id
        try {
            const user = await userModel.findById(userId)
            res.render("edit", {
                pageTitle: "Single user",
                user
            })    
        } 
        catch (e) {
            res.send(e.message)
        }
    }
    static editLogic = async(req, res)=>{
        const userId = req.params.id
        try {
            const user = await userModel.findById(userId)
            for(let prop in req.body){
                user[prop] = req.body[prop]
            }
            await user.save()
            res.redirect(`/single/${userId}`)
        } 
        catch (e) {
            res.send(e.message)
        }
    }
    static del = async(req, res) =>{
        const userId = req.params.id
        try {
            const user = await userModel.findByIdAndDelete(userId)
            res.redirect("/")
        } 
        catch (e) {
            res.send(e.message)
        }
    }
    static single = async(req, res) =>{
        const userId = req.params.id
        try {
            const user = await userModel.findById(userId)
            res.render("single", {
                pageTitle: "Single user",
                user
            })    
        } 
        catch (e) {
            res.send(e.message)
        }
    }
    static addAddr = async(req, res)=>{
        const userId = req.params.id
        res.render("addAddr", {userId})
    }
    static addAddrLogic = async(req, res)=>{
        const userId = req.params.id
        try {
            const user = await userModel.findById(userId)
            user.addresses.push(req.body)
            console.log(user.addresses)
            await user.save()
            res.redirect(`/single/${userId}`)
        }
        catch (e) {
            res.send(e)
        }
    }
}
module.exports = User

// user.address.push(req.body)
// in sigle: loop over user.address
// user.addresses.filter => delete
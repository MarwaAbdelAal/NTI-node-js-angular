const jwt = require("jsonwebtoken")
const userModel = require("../database/models/user.model")
const auth = async(req, res, next)=>{
    try {
        // get token from req header
        const token = req.header("Authorization")
        // verify token to get user._id
        const decoded = jwt.verify(token, process.env.JWTKEY)
        // search in db user (token, id)
        const user = await userModel.findOne({
            _id: decoded._id, 
            "tokens.token": token
        })
        // if !found => user unauth
        if (!user) throw new Error("unauthurized")
        // continue
        req.user = user
        req.token = token
        next()
    } 
    catch (e) {
        res.send({
            apiStatus: false, data: e, message: e.message
        })
    }
}

module.exports = auth
const {MongoClient} = require("mongodb")
const dbURL = "mongodb://127.0.0.1:27017"

const myConnection = (callBack)=>{
    MongoClient.connect(dbURL, {}, (err, client)=>{
        if(err) return callBack(err.message, false)
        const connection = client.db("g21HBS")
        callBack(false, connection)
    })
}

module.exports = myConnection
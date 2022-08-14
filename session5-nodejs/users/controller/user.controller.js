const deal = require("./dealWithJson")
const heads = ["id", "name", "age", "details"]

const add = (argv)=>{
    const user = {}
    heads.forEach(head => user[head] = argv[head])
    const allUsers = deal.readFromJson()
    allUsers.push(user)
    deal.writeToJson(allUsers)
}
const showAll = () => {
    const allUsers = deal.readFromJson()
    allUsers.forEach((user, i)=>{
        console.log(`"i": ${i+1}, "id": ${user.id}, "name": ${user.name}, "age": ${user.age}`);
    })
}
const showSingle = (id) => {
    const allUsers = deal.readFromJson()
    const user = allUsers.find(user => user.id==id)
    if(!user) return console.log("Not found")
    console.log(`"id": ${user.id}, "name": ${user.name}, "age": ${user.age}`)
}
const deleteUser = (id) => {
    const allUsers = deal.readFromJson()
    const users = allUsers.filter((allUsers)=>{return allUsers.id !== id})
    deal.writeToJson(users)
}
const editUser = (argv) => {
    const allUsers = deal.readFromJson()
    const user = allUsers.find(user => user.id==argv.id)
    heads.forEach(head => user[head] = argv[head])
    deal.writeToJson(allUsers)
}

module.exports = {add, showAll, showSingle, deleteUser, editUser}
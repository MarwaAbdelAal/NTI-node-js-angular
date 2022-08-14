const dealWithJson = require("./dealWithJson")
heads = ["title", "content", "dueDate", "status"]

const add = (argv) =>{
    const task = {}
    heads.forEach(head => task[head] = argv[head])
    const allTasks = dealWithJson.readFromJson()
    allTasks.push(task)
    dealWithJson.writeToJson(allTasks)
}
const showAll = () => {
    const allTasks = dealWithJson.readFromJson()
    allTasks.forEach((task, i) => {
        console.log(`Task ${i+1} = "title": ${task.title}, "content": ${task.content}, "dueDate": ${task.dueDate}, "status": ${task.status},`);
    })
}
const showSingle = (title) => {
    const allTasks = dealWithJson.readFromJson()
    const task = allTasks.find(task => task.title == title)
    if(!task) return console.log("Not found")
    console.log(`"title": ${task.title}, "content": ${task.content}, "dueDate": ${task.dueDate}, "status": ${task.status},`);
}
const deleteTask = (title) => {
    const allTasks = dealWithJson.readFromJson()
    const tasks = allTasks.filter((allTasks)=> {return allTasks.title !== title})
    dealWithJson.writeToJson(tasks)
}
const editTask = (argv) => {
    const allTasks = dealWithJson.readFromJson()
    const task = allTasks.find(task => task.title == argv.title)
    if(!task) return console.log("Not found")
    heads.forEach(head => task[head] = argv[head])
    dealWithJson.writeToJson(allTasks)
}
const changeStatus = (title) => {
    const allTasks = dealWithJson.readFromJson()
    const task = allTasks.find(task => task.title == title)
    if(!task) return console.log("Not found")
    task.status = !task.status
    dealWithJson.writeToJson(allTasks)
}

module.exports = {add, showAll, showSingle, deleteTask, editTask, changeStatus}
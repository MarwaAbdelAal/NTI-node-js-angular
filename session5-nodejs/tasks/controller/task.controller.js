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
    console.log(task)
}

module.exports = {add, showAll, showSingle}
const yargs = require("yargs")
const Task = require("./controller/task.controller")
//title:unique- content- due date - status:false

yargs.command({
    command: "showAll",
    handler: () => Task.showAll()
})
yargs.command({
    command: "showSingle",
    builder: {
        title:{
            type: "Number",
            demandOption: true
        }
    },
    handler: (argv) => Task.showSingle(argv.title)
})
yargs.command({
    command: "add",
    builder: {
        title:{
            default: Date.now()
        },
        content:{
            type: "String",
            default: "No content"
        },
        dueDate:{
            type: "Number",
            demandOption: true
        },
        status:{
            type: "boolean",
            default: "false"
        }
    },
    handler: (argv) => Task.add(argv)
})
yargs.command({
    command: "edit",
    handler: () => console.log("edit")
})
yargs.command({
    command: "delete",
    handler: () => console.log("delete")
})
yargs.command({
    command: "status",
    handler: () => console.log("status")
})

yargs.argv
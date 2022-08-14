const yargs = require("yargs")
const User = require("./controller/user.controller")

yargs.command({
    command: "showAll",
    handler: () => User.showAll()
})
yargs.command({
    command: "showSingle",
    builder: {
        id:{
            type: "Number",
            demandOption: true
        }
    },
    handler: (argv) => User.showSingle(argv.id)
})
yargs.command({
    command: "add",
    builder: {
        id:{
            default: Date.now()
        },
        name:{
            type: "String",
            demandOption: true
        },
        age:{
            type: "Number",
            demandOption: true
        },
        details:{
            title: "String",
            default: "No details yet"
        }
    },
    handler: (argv) => User.add(argv)
})
yargs.command({
    command: "edit",
    builder:{
        id:{
            type: "Number",
            demandOption: true
        },
        name:{
            type: "String"
        },
        age:{
            type: "Number"
        },
        details:{
            title: "String"
        }
    },
    handler: (argv) => User.editUser(argv)
})
yargs.command({
    command: "delete",
    builder:{
        id:{
            type: "Number",
            demandOption: true
        }
    },
    handler: (argv) => User.deleteUser(argv.id)
})

yargs.argv
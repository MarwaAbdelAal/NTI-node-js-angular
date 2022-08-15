const Customer = require("./controller/customer.controller")
const yargs = require("yargs")
// accNum, userName, name, intial balance, remaining balance, transactions:[]
yargs.command({
    command: "add",
    builder:{
        accNum:{
            default: Date.now()
        },
        username:{demandOption: true},
        name:{demandOption: true},
        balance:{demandOption: true},
        remaining:{default: 0},
        transactions:{default: []}
    },
    handler: (argv) => Customer.addCustomer(argv)
})
yargs.command({
    command: "edit",
    builder:{},
    handler: (argv) => Customer.editCustomer(argv)
})
yargs.command({
    command: "del",
    builder:{ 
        accNum:{ demandOption: true}
    },
    handler: (argv) => Customer.delCustomer(argv.accNum)
})
yargs.command({
    command: "showAll",
    handler: () => Customer.allCustomers()
})
yargs.command({
    command: "showSingle",
    builder:{accNum: {demandOption: true}},
    handler: (argv) => Customer.showCustomer(argv)
})
yargs.command({
    command: "addTransaction",
    builder:{
        accNum:{ demandOption: true}
    },
    handler: (argv) => Customer.addTransaction(argv.accNum)
})
yargs.argv
const dealWithJson = require("./dealWithJson")
heads = ["accNum", "username", "name", "balance", "remaining", "transactions"]
// accNum, userName, name, intial balance, remaining balance, transactions:[]

class Customer {
    static addCustomer = (data) => {
        let customer = {}
        heads.forEach(head => customer[head] = data[head])
        customer.remaining = customer.balance
        const allCustomers = dealWithJson.readFromJson()
        const index = dealWithJson.getIndex(allCustomers, customer.username, "username")
        if (index != -1) return console.log("username used before")
        allCustomers.push(customer)
        dealWithJson.writeToJson(allCustomers)
    }
    static addTransaction = (data) => {
    }
    static delCustomer = (data) => {
    }
    static showCustomer = (data) => {
        const allCustomers = dealWithJson.readFromJson()
        const index = dealWithJson.getIndex(allCustomers, data, "accNum")
        if (index != -1) return console.log("username used before")
        console.log(allCustomers[index])
    }
    static allCustomers = () => {
        const allCustomers = dealWithJson.readFromJson()
        allCustomers.forEach(customer => {
            console.log(`"accNum": ${customer.accNum} "username": ${customer.username}, "name": ${customer.name}, "balance": ${customer.balance}, "remaining": ${customer.remaining}, "transactions": ${customer.transactions},`)
        })
    }
    static editCustomer = (data) => {
    }
}

module.exports = Customer
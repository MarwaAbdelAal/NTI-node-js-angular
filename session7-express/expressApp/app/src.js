const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()
// const viewsDir = path.join(__dirname, "../public/views")
// const staticDir = path.join(__dirname, "../public/static")
app.use(express.static(path.join(__dirname, "../public/static")))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../public/views"))
hbs.registerPartials(path.join(__dirname, "../public/layouts"))

app.get("/", (req, res)=>{
    res.render("all", {
        pageTitle: "Home page",
        pagecontent: "Hello from add 0"
    })
})
app.get("/add", (req, res)=>{
    res.render("add", {
        pageTitle: "Add new user"
    })
})
app.get("/edit/:id", (req, res)=>{
    const user = {name: "marwa", age: 22, email:"marwa@gmail.com"}
    res.render("edit", {
        pageTitle: "Edit user",
        user // user:user
    })
})
app.get("/delete/:id", (req, res)=>{
    res.render("delete", {
        pageTitle: "Delete user"
    })
})
app.get("/single/:id", (req, res)=>{
    res.render("single", {
        pageTitle: "Single user"
    })
})

app.all("*", (req, res)=>{
    res.render("error404", {
        pageTitle: "Not found"
    })
})

module.exports = app
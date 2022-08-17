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
app.use(express.urlencoded({extended: true})) // required for post forms
const userRoutes = require("../routes/user.route")
app.use(userRoutes)

app.all("*", (req, res)=> res.render("error404", { pageTitle: "Not found" }))

module.exports = app
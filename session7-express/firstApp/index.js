const express = require("express") // npm i express
const app = express()
const PORT = 3000
const path = require("path")
const staticDir = path.join(__dirname, "static") //`${__dirname}/static`
const viewsDir = path.join(__dirname, "frontend/views") //`${__dirname}/static`
app.use(express.static(staticDir))

// view engine hbs, ejs, pug .... => npm i hbs
app.set("view engine", "hbs")
app.set("views", viewsDir)

// route => request, response, keyword
app.get("/html", (req, res)=>{
    // const fileLoc = `${__dirname}/1.png`
    res.sendFile(staticDir)
})
app.get("/", (req, res)=>{
    res.render("home")
})
app.get("/about", (req, res)=>{
    res.render("about")
})

app.listen(PORT, ()=> console.log(`we are on http://localhost:${PORT}`)) // http://localhost:3000/
// node index
// npm i -g nodemon => global
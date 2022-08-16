const express = require("express") // npm i express
const app = express()
const PORT = 3000
const path = require("path")
const staticDir = path.join(__dirname, "static") //`${__dirname}/static`
app.use(express.static(staticDir))

// view engine hbs, ejs, pug .... => npm i hbs
app.set("view engine", "hbs")

// route => request, response, keyword
app.get("/", (req, res)=>{
    res.send("Hello from express")
})
app.get("/about", (req, res)=>{
    res.send({name: "marwa", age: 22})
})
app.get("/contact", (req, res)=>{
    res.send("<h1>Hi</h1>")
})
app.get("/html", (req, res)=>{
    // const fileLoc = `${__dirname}/1.png`
    res.sendFile(staticDir)
})
app.get("/hbs", (req, res)=>{
    res.render("home")
})

app.listen(PORT, ()=> console.log(`we are on http://localhost:${PORT}`)) // http://localhost:3000/
// node index
// npm i -g nodemon => global
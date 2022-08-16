const express = require("express") // npm i express
const app = express()
const PORT = 3000

//route => request, response, keyword
app.get("/", (req, res)=>{
    res.send("Hello from express")
})

app.listen(PORT, ()=> console.log(`we are on http://localhost:${PORT}`)) // http://localhost:3000/
// node index
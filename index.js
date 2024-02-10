//installing the dependencies 
const express = require("express")
const http = require("http")
const socketio = require("socket.io")
const port = 3000 ;

const app = express()
const server = http.createServer(app)

app.get("/", (req,res) => {
    res.send("Hello")
})


app.listen(`${port}` , ()=> {
    console.log(`Server started and running on ${port}`)
})
const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

const port = process.env.PORT || 5000
console.log(port)

app.listen(port,()=>{
    console.log(`Open port no. is ${port}`)
})
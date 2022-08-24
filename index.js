const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT
const bodyParser = require('body-parser')
const { dbConnection } = require("./connection/database")

app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


dbConnection()

const routes = require('./routes/route')
app.use('/', routes)

app.listen(port,()=>{
    console.log(`server is running on: ${port}`)
}) 
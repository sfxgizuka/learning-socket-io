const express = require('express')
const http = require('http')

const app = express()
const port = 8000

const server = http.createServer(app)

server.listen(port, ()=>{
    console.log(`server running on ${port}`)
})
const express = require('express')
const http = require('http')
const path = require('path');
const socket = require('socket.io')

const app = express()
const port = 8000


const server = http.createServer(app)

// const socketServer = socket.server
const io = socket(server)

io.on('connection', function(socket){
    console.log('new user connected')

    socket.on('disconnect', function(){
        console.log('user disconnected')
    })
})

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

server.listen(port, ()=>{
    console.log(`server running on ${port}`)
})
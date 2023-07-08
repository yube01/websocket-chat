import Express  from "express";
import http from "http"
import cors from "cors"
import { Server } from "socket.io";



const app = Express()


app.use(cors())



const server = http.createServer(app)


const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
})

//shows if user is connected to the server
io.on("connection",(socket)=>{
    console.log(`User connected : ${socket.id}`)


    socket.on("join_room",(data)=>{
        socket.join(data)
        console.log(`User with ID: ${socket.id} joined room :${data}`)

    })

    socket.on("send_message",(data)=>{
        
        console.log(`Message: ${data}`)
    })

    socket.on("disconnect",()=>{
        console.log("User disconnected", socket.id)
    })

})



server.listen(9898,()=>{
    console.log("Server started")
})





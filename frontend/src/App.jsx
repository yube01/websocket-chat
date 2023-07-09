import io from "socket.io-client"
import './App.css'
import { useState } from "react"
import Chat from "./Chat"

const socket = io.connect("http://localhost:9898")

function App() {

  const [username,setUsername] = useState("")
  const [room,setRoom] = useState("")


  const joinRoom = ()=>{
    if (username !== "" && room !== ""){
      socket.emit("join_room", room)
    }
    
  }
  

  return (
    <>
    <h3>Join Chat</h3>
    <input type="text" placeholder="John..." onChange={(e)=>{setUsername(e.target.value)}}/>
    <input type="text" placeholder="Room ID..." onChange={(e)=>{setRoom(e.target.value)}}/>  
    <button onClick={joinRoom}>Join a room</button>



    <Chat socket={socket} username = {username} />

    </>
  )
}

export default App

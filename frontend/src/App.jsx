import io from "socket.io-client"
import './App.css'
import { useState } from "react"


const socket = io.connect("http://localhost:9898")

function App() {

  const [username,setUsername] = useState("")
  const [room,setRoom] = useState("")


  const joinRoom = ()=>{
    if (username !== "" && room !== ""){
      socket.emit("join_room", room)
    }
    
  }

  const [currentMsg, setCurrentMsg] = useState("")

    const sendMsg = ()=>{
        if (currentMsg !== "") {
            const messageData = {
              room: room,
              author: username,
              message: currentMsg,
              time:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            };
      
             socket.emit("send_message", messageData);

             
          
          }
    }
  

  return (
    <>
    <h3>Join Chat</h3>
    <input type="text" placeholder="John..." onChange={(e)=>{setUsername(e.target.value)}}/>
    <input type="text" placeholder="Room ID..." onChange={(e)=>{setRoom(e.target.value)}}/>  
    <button onClick={joinRoom}>Join a room</button>



   <div className="chat">
   <div className="header">
            Live Chat
        </div>
        <div className="chat-body">

        </div>
        <div className="footer">
            <input type="text"placeholder="Hey.." name="" id="" onChange={(e)=>setCurrentMsg(e.target.value)}/>
            <button onClick={sendMsg}>Send</button>
        </div>
   </div>

    </>
  )
}

export default App

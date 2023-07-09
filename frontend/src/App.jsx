// import io from "socket.io-client"
import './App.css'
// import { useState } from "react"
// import Chat from "./Chat"
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Register from "./page/Register"
import Home from "./page/Home"
import Login from "./page/Login"

// const socket = io.connect("http://localhost:9898")

function App() {

  // const [username,setUsername] = useState("")
  // const [room,setRoom] = useState("")


  // const joinRoom = ()=>{
  //   if (username !== "" && room !== ""){
  //     socket.emit("join_room", room)
  //   }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);
    
  
  

  return (
    <>
    {/* <h3>Join Chat</h3>
    <input type="text" placeholder="John..." onChange={(e)=>{setUsername(e.target.value)}}/>
    <input type="text" placeholder="Room ID..." onChange={(e)=>{setRoom(e.target.value)}}/>  
    <button onClick={joinRoom}>Join a room</button>



    <Chat socket={socket} username = {username} /> */}
        <RouterProvider router={router} />


    </>
  )
}

export default App

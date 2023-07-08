import { useState } from "react"

const Chat = ({socket, room, username}) => {

    // const [currentMsg, setCurrentMsg] = useState("")

    // const sendMsg = async()=>{
    //     if (currentMsg !== "") {
    //         const messageData = {
    //           room: room,
    //           author: username,
    //           message: currentMsg,
    //           time:
    //             new Date(Date.now()).getHours() +
    //             ":" +
    //             new Date(Date.now()).getMinutes(),
    //         };
      
    //         await socket.emit("send_message", messageData);
          
    //       }
    // }

  return (
    <div>

        {/* <div className="header">
            Live Chat
        </div>
        <div className="chat-body">

        </div>
        <div className="footer">
            <input type="text"placeholder="Hey.." name="" id="" onChange={(e)=>setCurrentMsg(e.target.value)}/>
            <button onClick={sendMsg}>Send</button>
        </div> */}
      
    </div>
  )
}

export default Chat

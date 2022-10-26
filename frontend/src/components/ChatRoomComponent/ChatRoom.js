import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import SocketActions from "./functions/SocketActions";

import Message from "../MessageComponent/Message";
import "./ChatRoom.css"

const ChatRoom = () => {
    const [messageList, setMessageList] = useState([])
    const [message,setMessage]=useState("")
    const [tempSocket,setTempSocket]=useState(null)

    const { state } = useLocation()

    const currentRoom = state.currentRoom
    const currentUser = state.currentUser

    let currentSocket=null;

    const buttonOnPress=() =>
    {   
        SocketActions.sendMessageToServer(tempSocket,currentRoom,currentUser,message)
        
    }
    

    useEffect(() => {
        SocketActions.connectSocket(io).then(newSocket => {

            currentSocket = newSocket
            setTempSocket(currentSocket)

            SocketActions.connectToRoom(currentSocket, currentRoom, currentUser)

            currentSocket.on("messageFromServer", (updatedMessageList) => {
                
                let tempMessage=updatedMessageList.pop()
                setMessageList(tempArray =>[...updatedMessageList,tempMessage])

            })
        })
    }, [])


    return (
        <div id="main-div" >
            <p id="room-title">You are currently in {currentRoom} room !</p>
            <div id="main-message-div" >
            {
                messageList.map((message,index) =>
                {
                    return<Message key={index} messageWriter={message.messageWriter} messageContent={message.messageContent} />
                })
            }
            </div>
            <div id="send-div">
                <p id="current-user">{currentUser} :</p>
                <input onChange={(e) =>setMessage(e.target.value)} value={message} id="chatRoom-input" type="text"></input>
                <button onClick={buttonOnPress} id="chatroom-button">Send</button>
            </div>
        </div>
    );




}

export default ChatRoom;
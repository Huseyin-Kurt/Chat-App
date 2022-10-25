import { useEffect, useState } from "react"
import { io } from "socket.io-client";

import "./LoginScreen.css"
import createRoom from "./functions/createRoom"


const LoginScreen = () => {
    
    const [nickName, setNickname] = useState("");
    const [roomName, setRoomName] = useState("");

    return (
        <div className="container-div">
            <p className="field-name">Nick Name</p>
            <input onChange={e => (setNickname(e.target.value))} className="input" type="text"></input>
            <p className="field-name">Room Name</p>
            <input onChange={e => (setRoomName(e.target.value))} className="input" type="text"></input>
            <button onClick={() => { createRoom(io,nickName, roomName) }} className="button" >Chat !</button>
        </div>
    );
}

export default LoginScreen;
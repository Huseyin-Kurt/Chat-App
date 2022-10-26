import { useEffect, useState } from "react"
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

import "./LoginScreen.css"


const LoginScreen = () => {
    
    const [nickName, setNickname] = useState("");
    const [roomName, setRoomName] = useState("");
    
    const navigate=useNavigate()

    const buttonOnClick=() =>
    {
        navigate("/ChatRoom",{state:{currentRoom:roomName,currentUser:nickName}})
    }

    return (
        <div className="container-div">
            <p className="field-name">Nick Name</p>
            <input onChange={e => (setNickname(e.target.value))} className="input" type="text"></input>
            <p className="field-name">Room Name</p>
            <input onChange={e => (setRoomName(e.target.value))} className="input" type="text"></input>
            <button onClick={buttonOnClick} className="button" >Chat !</button>
        </div>
    );
}

export default LoginScreen;
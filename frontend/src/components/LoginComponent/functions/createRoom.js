

const attention = (io,userName, roomName) => {

    const socket=io.connect("http://localhost:3001",{
        reconnectionDelay: 1000,
        reconnection: true,
        reconnectionAttemps: 10,
        transports: ['websocket'],
        agent: false,
        upgrade: false,
        rejectUnauthorized: false
    })

    if(userName===""||roomName==="")
    {
        alert("Fields cant be empty!");
        return;
    }

    socket.emit("createNewRoom",roomName,userName)

    
}


export default attention;
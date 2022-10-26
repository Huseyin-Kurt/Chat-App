const connectSocket=(io) =>
{
    return new Promise((resolve,reject) =>
    {
        const socket= io.connect("http://localhost:3001",{
        reconnectionDelay: 1000,
        reconnection: true,
        reconnectionAttempts: 10,
        transports: ['websocket'],
        agent: false,
        upgrade: false,
        rejectUnauthorized: false
    })

    resolve(socket)
    })

}

const connectToRoom=async (socket,roomName,userName) =>
{   
    socket.emit("createNewRoom",roomName,userName)
}

const sendMessageToServer=(socket,roomName,userName,message) =>
{
    socket.emit("sendMessageToServer",roomName,userName,message)
}


export default{
    connectSocket:connectSocket,
    connectToRoom:connectToRoom,
    sendMessageToServer:sendMessageToServer,
}
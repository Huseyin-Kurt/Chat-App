const express=require("express")
const http=require("http")
const {Server}=require("socket.io")
const cors=require("cors")

const roomActions=require("./src/functions/roomActions.js")
const ChatRoom=require("./src/classes/ChatRoom")


const ChatRoomList=[];

const app=express()
const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3001",
        methods:["GET","POST"]
    }
})

const port=process.env.PORT||3001
app.use(cors())



io.on("connect",(socket) =>
{
    socket.on("createNewRoom",(roomName,userName,callback) =>
    {
        const result=ChatRoomList.filter(existingRooms=>existingRooms.roomName===roomName)
        socket.join(roomName)
        

        if(result.length===0)
        {   
            let newRoom=roomActions.createNewRoom(roomName,userName)
            ChatRoomList.push(newRoom)
            
        }

        else
        {   
            roomActions.addUserToExistingRoom(result[0],userName)
            
        }

        const roomToUpdate=ChatRoomList.filter(existingRooms=>existingRooms.roomName===roomName)
        io.to(roomToUpdate[0].roomName).emit("messageFromServer",roomToUpdate[0].messages)
        
    })

    socket.on("sendMessageToServer",(roomName,userName,message) =>
    {
        const roomToUpdate=ChatRoomList.filter(existingRooms=>existingRooms.roomName===roomName)

        roomActions.sendMessageToClient(socket,userName,message,roomToUpdate[0])

        io.to(roomToUpdate[0].roomName).emit("messageFromServer",roomToUpdate[0].messages)

    })
})



server.listen(port,() =>
{
    console.log("running on port " + port)
})


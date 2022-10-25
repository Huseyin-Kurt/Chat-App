const express=require("express")
const http=require("http")
const {Server}=require("socket.io")
const cors=require("cors")

const eventListener=require("./src/functions/eventListener.js")
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
    socket.on("createNewRoom",(roomName,userName) =>
    {
        const result=ChatRoomList.filter(existingRooms=>existingRooms.roomName===roomName)

        if(result.length===0)
        {
            ChatRoomList.push(eventListener.createNewRoom(socket,roomName,userName))
            
        }

        else
        {   
            eventListener.joinExistingRoom(socket,result[0],userName)
        }
    })
})






server.listen(port,() =>
{
    console.log("running on port " + port)
})


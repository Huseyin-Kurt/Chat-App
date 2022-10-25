const ChatRoom=require("../classes/ChatRoom.js")
const Message=require("../classes/Message.js")

const createNewRoom=(socket,roomName,userName) =>
{
    socket.join(roomName)
    console.log("A new room has been created+ "+roomName)
    const newChatRoom=new ChatRoom(roomName,userName)
    return newChatRoom
}

const joinExistingRoom=(socket,existingChatRoom,userName) =>
{
    socket.join(existingChatRoom.roomName)

    
    existingChatRoom.messages.push(new Message(userName))
    console.log(existingChatRoom)

    
}


module.exports={
    createNewRoom:createNewRoom,
    joinExistingRoom:joinExistingRoom,
}
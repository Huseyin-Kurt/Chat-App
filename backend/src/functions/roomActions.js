const ChatRoom=require("../classes/ChatRoom.js")
const Message=require("../classes/Message.js")

const createNewRoom=(roomName,userName) =>
{
    const newChatRoom=new ChatRoom(roomName,userName,"createRoom")
    
    return newChatRoom
}

const addUserToExistingRoom=(existingChatRoom,userName) =>
{
    existingChatRoom.messages.push(new Message(userName,"joinRoom"))
}

const sendMessageToClient=(socket,userName,message,roomToUpdate) =>
{
    roomToUpdate.messages.push(new Message(userName,"userMessage",message))
}



module.exports={
    createNewRoom:createNewRoom,
    addUserToExistingRoom:addUserToExistingRoom,
    sendMessageToClient:sendMessageToClient,
}
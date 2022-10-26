const Message=require("./Message.js")

class ChatRoom
{
    constructor(roomName,userName,type)
    {
        this.roomName=roomName
        this.messages=[new Message(userName,type)]
        
    }
}

module.exports=ChatRoom
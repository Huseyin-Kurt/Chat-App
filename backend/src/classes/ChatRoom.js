const Message=require("./Message.js")

class ChatRoom
{
    constructor(roomName,userName)
    {
        this.roomName=roomName
        this.messages=[new Message(userName)]
        
    }
}

module.exports=ChatRoom
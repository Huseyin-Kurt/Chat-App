class Message{
    constructor(userName,type,messageContent)
    {
        if(type==="createRoom")
        {
            this.messageWriter="System"
            this.messageContent="The room was created by "+userName
        }

        else if(type==="joinRoom")
        {
            this.messageWriter="System"
            this.messageContent=userName + " Has just joined!"
        }

        else
        {
            this.messageWriter=userName
            this.messageContent=messageContent
        }

        
    }
}

module.exports=Message
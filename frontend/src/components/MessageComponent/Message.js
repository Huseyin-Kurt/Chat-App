import "./Message.css"

const Message=({messageWriter,messageContent}) =>
{   
    if(messageWriter==="System")
    {
        return(
            <div className="message-div" id="system-message-div">
                <p id="system-message-p">{messageContent}</p>
            </div>
        );
    }

    else
    {
        return(
            <div className="message-div" id="nonSystem-message-div">
                <p id="non-system-message-writer">{messageWriter} :</p>
                <p id="non-system-message-content">{messageContent}</p>
            </div>
        );
    }
}

export default Message
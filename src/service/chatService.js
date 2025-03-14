const Chat = require("../models/Chat.js");
const User = require("../models/User.js")
const Message = require("../models/Message.js")

async function sendMessage(senderNumber,recieverNumber,message){
    try {
        let chat = await Chat.findOne({ participants: { $all: [senderNumber, recieverNumber] } });
        if(chat==null){
            chat = new Chat({
                participants:[sendMessage,recieverNumber],
                messages:[],
            })
        }
        const newMessage = new Message({
            chatid: chat._id,
            sender:senderNumber,
            text:message
        });

        await newMessage.save();
        return newMessage;
    } catch (error) {
        console.error("Error sending message:", error);
    }
}

module.exports={ sendMessage};
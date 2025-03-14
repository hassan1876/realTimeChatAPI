const chatService = require("../service/chatService.js");
const {sendMessage} = chatService;
const {addUser,removeUser,getUser} =require("../utils/socketManager.js");
const handleChatEvents =  (io,socket)=>{
    socket.on("register_user",({userNumber})=>{
        addUser(userNumber,socket);
    })
    socket.on("send_message",async({sendeNumber,recieverNumber,message})=>{
        const recieverSocket = getUser(recieverNumber);
        sendMessage(sendeNumber,recieverNumber,message);

        if(recieverSocket){
            recieverSocket.emit("recieve_message",message);
        }
    })
    socket.on('disconnect', () => {
        removeUser(socket.id);
        console.log("user disconnected");
      })
}
module.exports = handleChatEvents

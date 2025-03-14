import { io } from 'socket.io-client';

const socket1 = io("http://localhost:3333");
const socket2 = io("http://localhost:3333");
socket1.emit('register_user', {userNumber:"1"});
socket2.emit('register_user', {userNumber:"2"});

socket1.emit('send_message',{sendeNumber:"1",recieverNumber:"2",message:"hello mohamed"})
socket2.emit('send_message',{sendeNumber:"2",recieverNumber:"1",message:"hi hassan"})

socket2.on("recieve_message",(message)=>{
    console.log("2 recieved:",message);
})
socket1.on("recieve_message",(message)=>{
    console.log("1 recieved:",message);
})
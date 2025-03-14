const onlineUsers = new Map();
const usersNumber  = new Map();

function addUser(userNumber,socket){
    onlineUsers.set(userNumber,socket);
    usersNumber.set(socket.id,userNumber);
}
function removeUser(socketid){
    onlineUsers.delete(usersNumber.get(socketid));
    usersNumber.delete(socketid);    
}
function getUser(userNumber){
    return onlineUsers.get(userNumber);
}
module.exports = {addUser,removeUser,getUser};
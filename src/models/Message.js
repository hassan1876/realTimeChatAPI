const  mongoose = require("mongoose");
const {Schema} = mongoose;
const messgaeSchema = mongoose.Schema({
    chatid:{
        type:String,
        required:true
    },
    sender: {
        type:String,
        required: true
    },
    timeStanp:{
        type:Date,
        default:Date.now
    },
    text:{
        type:String,
        required:true
    },
    
})

module.exports =  mongoose.model("Messgae",messgaeSchema);
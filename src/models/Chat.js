const  mongoose = require("mongoose");
const {Schema} = mongoose;
const chatSchema = mongoose.Schema({
    participants: [{
        type: String,
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    
    }],
})

module.exports =  mongoose.model("Chat",chatSchema);
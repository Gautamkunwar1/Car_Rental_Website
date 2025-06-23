import mongoose from "mongoose";

const msgSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
},
    {timestamps:true},
)

const MsgSchema = mongoose.model("message",msgSchema);
export default MsgSchema;
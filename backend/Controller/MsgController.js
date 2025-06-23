import Msg from "../model/msgSchema.js";
import { sendResponse } from "../utils/response.util.js";

export const addMsg = async(req,res)=>{
    const {name,email,msg} = req.body;
    if(!name ||!email || !msg) return sendResponse(res,400,false,"All fields are required");
    if(name.length <4 ) return sendResponse(res,400,false,"Name should be of atleast 4 characters")
        try {
            const newMsg = await Msg.create({
                name,email,msg
            });
            return sendResponse(res,200,true,"Message sended successfully",newMsg);
        } catch (error) {
            console.error(`Error in addMsg Controller:${error.message}`);
            return sendResponse(res,500,false,"Internal Server Error")
        }
}

export const getAllMsg = async(req,res)=>{
    try {
        const allMsg = await Msg.find();
        return sendResponse(res,200,true,"Data found successfully",allMsg)
    } catch (error) {
        return sendResponse(res,500,false,"Server Error");
    }
}

export const deleteMsg = async(req,res)=>{
    const {id} = req.params;
    try {
        const deletedMsg = await Msg.findByIdAndDelete(id);
        if(deletedMsg){
            return sendResponse(res,200,true,"Message deleted successfully");
        }else{
            return sendResponse(res,400,false,"Message not found")
        }
    } catch (error) {
        console.error(`Error in deleteMsg Controller: ${error.message}`);
        return sendResponse(res,500,false,"Server Error");
    }
}
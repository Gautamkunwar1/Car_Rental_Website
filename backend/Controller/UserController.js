import User from "../model/userSchema.js";
import { sendResponse } from "../utils/response.util.js";

export const allUsers = async(req,res)=>{
    try {
        const users = await User.find();
        return sendResponse(res,200,true,"Data found successfully",users)
    } catch (error) {
        return sendResponse(res,500,false,"Server Error")
    }
}

export const deleteUser = async(req,res)=>{
    const {id} = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if(deletedUser){
            return sendResponse(res,200,true,"User deleted successfully")
        }else{
            return sendResponse(res,400,false,"User not found")
        }
    } catch (error) {
        return sendResponse(res,500,false, "Internal Server Error")
    }
}
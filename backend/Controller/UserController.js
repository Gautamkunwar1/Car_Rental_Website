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
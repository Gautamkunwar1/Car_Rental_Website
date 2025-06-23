import User from "../model/userSchema.js";
import { sendResponse } from "../utils/response.util.js";

export const allUsers = async(req,res)=>{
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const totalUsers = await User.countDocuments();
        const users = await User.find().skip((page-1)*limit).limit(limit);
        return sendResponse(res,200,true,"Data found successfully",{
        users,totalUsers,
        totalPages:Math.ceil(totalUsers/limit),
        currentPage:page})
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
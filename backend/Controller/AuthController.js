import jwt from 'jsonwebtoken';
import { redis } from "../lib/redis.js";
import User from "../model/userSchema.js";
import { sendResponse } from "../utils/response.util.js";

const generateToken = async(userId)=>{
    const refreshToken = await jwt.sign({userId},process.env.REFRESH_TOKEN);
    const accessToken = await jwt.sign({userId},process.env.ACCESS_TOKEN);

    return {refreshToken, accessToken};
}

const setRefreshToken = async(userId,refreshToken)=>{
    await redis.set(`Car-Rental_RefreshToken${userId}`,refreshToken);
}

const setCookies = async(res,refreshToken,accessToken)=>{
    res.cookie("accessToken",accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production" ? true : false,
        sameSite : "strict",
        maxAge : 15*60*1000,
    })
    res.cookie("refreshToken",refreshToken,{
        httpOnly :true,
        secure : process.env.NODE_ENV === "production"? true : false,
        sameSite : "strict",
        maxAge : 7*24*60*60*1000,
    })
}

export const signup = async(req,res)=>{
    const{email,password,name}= req.body;
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

    if(!email || !password || !name) return sendResponse(res,400,false,"All fields are required");

    if(!emailRegx.test(email)) return sendResponse(res,400,false,"Provide a valid email");
    if(!passwordRegx.test(password)) return sendResponse(res,400,false,"Password  must contain at least one digit and one uppercase character and of 6 characters");

    try {
        const existingUser = await User.findOne({email});
        if(existingUser) return sendResponse(res, 404, false, "Email is already in use");

        const newUser = User.create({
            name, email, password
        })
        return sendResponse(res,201, true, "User added successfully",{name,email})
    } catch (error) {
        console.error(`Error in signup controller :${error.message}`);
        return sendResponse(res,500,false,"Internal server error")
    }
}

export const login = async(req,res)=>{
    const{email,password} = req.body;
    if(!email || !password) return sendResponse(res,400,false,"Invalid Credentials");
    try {
        const user = await User.findOne({email});
        if(!user) return sendResponse(res,404,false,"User not found");

        const isAuthenticated = await user.comparePassword(password)
        if(!isAuthenticated) return sendResponse(res,400,false,"Invalid Credentials");

        const{accessToken, refreshToken} = await generateToken(user._id);
        setRefreshToken(user._id,refreshToken)
        await setCookies(res,refreshToken,accessToken);
        const data = {
            id: user._id,
            name: user.name,
            email:user.email,
            role: user.role,
            cartItem : user.cartItem,
        }

        return sendResponse(res,200,true,"Logged in successfully",data);
    } catch (error) {
        console.error(`Error in login controller: ${error.message}`);
        return sendResponse(res,500,false,"Internal Server Error")
    }
}

export const logout = async(req,res)=>{
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken || !accessToken) return sendResponse(res,404,false,"Token not found");

    res.clearCookie("accessToken",{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production" ? true : false,
        sameStrict :"strict",
    })

    res.clearCookie("refreshToken",{
        httpOnly : true,
        secure : process.env.NODE_ENV === "production" ? true: false,
        sameStrict : "strict"
    })

    sendResponse(res,200,true,"User logged out successfully")
}

export const getProfile = async(req,res)=>{
    try {
        return res.json(req.user);
    } catch (error) {
        sendResponse(res,500,false,"Server Error")
    }
}
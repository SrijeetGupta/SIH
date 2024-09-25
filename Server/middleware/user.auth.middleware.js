import jwt from "jsonwebtoken";
import AsyncHandler from '../utils/AsyncHandler.js'
import ApiError from "../utils/ApiError.js";
import User from "../model/user.model.js";



export const verifyUser=AsyncHandler(async(req,_,next)=>{
   
    const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
    if(!token){
        throw new ApiError(401,"unauthorized request")
    }
    
    const decodedToken = jwt.verify(token.toString(), process.env.ACCESS_TOKEN_SECRET);
    
    const user=await User.findById(decodedToken?._id).select("-password -refreshToken")
    console.log("hahah")
    if(!user){
        throw new ApiError(401,"invalid Access token")
    }
    console.log("hahah")
    req.user=user;
   
    next();
})
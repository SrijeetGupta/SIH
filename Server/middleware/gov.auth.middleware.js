import jwt from "jsonwebtoken";
import AsyncHandler from '../utils/AsyncHandler.js'
import ApiError from "../utils/ApiError.js";
import Goverment from "../model/Goverment.model.js";



export const verifyGov=AsyncHandler(async(req,_,next)=>{
    
    const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if(!token){
        throw new ApiError(401,"unauthorized request")
    }
    //problem
    const decodedToken=jwt.verify(token.toString(), process.env.ACCESS_TOKEN_SECRET)
   
    const gov=await Goverment.findById(decodedToken?._id).select("-password -refreshToken")
    
    if(!gov){
        throw new ApiError(401,"invalid Access token")
    }
    req.gov=gov;
   
    next();
})
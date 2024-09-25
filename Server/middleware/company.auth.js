import jwt from "jsonwebtoken";
import AsyncHandler from '../utils/AsyncHandler.js'
import ApiError from "../utils/ApiError.js";
import Company from "../model/Company.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";



export const verifyCompany=AsyncHandler(async(req,_,next)=>{
    
    const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if(!token){
        throw new ApiError(401,"unauthorized request")
    }
    
    const decodedToken=jwt.verify(token.toString(), process.env.ACCESS_TOKEN_SECRET)
   
    const company=await Company.findById(decodedToken?._id).select("-password -refreshToken")
    
    if(!company){
        throw new ApiError(401,"invalid Access token")
    }
    req.company=company;
   
    next();
})
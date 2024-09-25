

import Job from "../model/Job.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";


const getjob=AsyncHandler((req,res)=>{
    alljob=Job.find() 
    return res.status(200).json(
        alljob
    )
})

export {getjob}



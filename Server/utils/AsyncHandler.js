

const AsyncHandler=(fn)=>async (req,res,next)=>{
    try {
        await fn(req,res,next)
        
    } catch (error) {
        res.status(error.statuscode||500).json(
            {
                "sucess":false,
                "msg":error.msg || "somthing went wrong"
            }
        )
    }
}

export default AsyncHandler
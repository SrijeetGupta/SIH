
import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import Company from "../model/Company.model.js";
import Goverment from "../model/Goverment.model.js";


const getgov=AsyncHandler((req,res)=>{
    const gov=req.gov
   return res.status(200).json(
        {
            gov  
        }
    )


})

const Approvelicence=AsyncHandler((req,res)=>{
    const{licenceToApprove}=req.body
    if(!licenceToApprove){
        throw new ApiError(400,"company id not found")
    }
    else{
        const comp=Company.findById(licenceToApprove)
        if(!comp){
            throw new ApiError(400,"company not found")
        }
        else{
            const isdone1= Company.findOneAndUpdate( {_id:licenceToApprove}, {licencedBy:req.gov.govermentname} )
            if(isdone1){
                return res.status(200).json({
                    "msg":"licence approved successfully"
                })
            }
        }
    }
})

const Rejectlicence=AsyncHandler((req,res)=>{
    const{licenceToApprove}=req.body
    if(!licenceToApprove){
        throw new ApiError(400,"company id not found")
    }
    else{
        const comp=Company.findById(licenceToApprove)
        if(!comp){
            throw new ApiError(400,"company not found")
        }
        else{
            const isdone1= Company.findOneAndUpdate( {_id:licenceToApprove}, {licencedBy:"licence got rejected"} )
            const ltoApprove=req.gov.licenceToApprove.remove(licenceToApprove)
            const govId=req.gov._id
            const isdone2=Goverment.findOneAndUpdate({_id:govId},{licenceToApprove:ltoApprove})
            if(isdone1){
               return res.status(200).json({
                    "msg":"licence approved successfully"
                })
            }
        }
    }
})


//new
const creatgoverment= AsyncHandler(async(req,res)=>{
    const {name,email,password} =req.body
    if(!(name&&email&&password)){
      throw new ApiError(400,"all filde are requred")
    }
    else if(await Goverment.findOne({$or:[{name},{email}]})){
      throw new ApiError(400,"Goverment already exit")
    }
    else{
      const user =Goverment.creatuser({
          name,
          email,
          password
      })
    req.status(200).json({
      "msg":"user created successfully",
      user
    })
  
    }
    
      
  })



  const getallgov=AsyncHandler((req,res)=>{
    allgov=Goverment.find().select("-password -licenceToApprove -licenceApproved")
    res.status(200).json(
        allgov
    )
})



const logingov=AsyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if(!(email&&password)){
      throw new ApiError(400,"detail not provided")
    }
    else{
      const gov=await Goverment.findOne().select("-password ")
      if(!gov){
        throw new ApiError(400,"gov not found")
      }
      else{
        if(gov.isPasswordCorrect(password)){

          refreshToken=gov.generateRefreshtoken()
          gov.refreshToken=refreshToken;
          await gov.save({ validateBeforeSave: false })

          const option={
            httpOnly:true,
            secure:false
          }
         return res.status(200).cookie("refreshToken", refreshToken,option).json(
            {
              "msg":"gov login successfully"
            }
          )
        }else{
          throw new ApiError(400,"unauthrized request")
        }
  
      }
    }
  
  
  })

export {getgov,Approvelicence,Rejectlicence,getallgov,logingov,creatgoverment}


// import AsyncHandler from "../utils/AsyncHandler";
// import ApiError from "../utils/ApiError";
// import Company from "../model/Company.model";


// const getcompany=AsyncHandler((req,res)=>{
//     const company=req.company
//     res.status(200).json(
//         {
//             company  
//         }
//     )
// })

// const creatcompany=AsyncHandler(async(req,res)=>{
//     const {companyname,email,password} =req.body
//   if(!(companyname&&email&&password)){
//     throw new ApiError(400,"all filde are requred")
//   }
//   else if(await Company.findOne({$or:[{companyname},{email}]})){
//     throw new ApiError(400,"user already exit")
//   }
//   else{
//     const company =Company.creatuser({
//         companyname,
//         email,
//         password
//     })
//   req.status(200).json({
//     "msg":"user created successfully",
//     company
//   })
//   }
// })

// const deletcompany=AsyncHandler((req,res)=>{
//     const isdelete=Company.deleteOne({"_id":req.company._id})
//     if(isdelete){
//         throw new ApiError(500,"unable to delet")
//     }
//     else{
//       res.status(200).json({
//         "msg":"user deleted successfully"
//       })
//     }
// })





// const postjob=AsyncHandler((req,res)=>{
    
// })

// const getlicence=AsyncHandler((req,res)=>{
    
// })


// export {getcompany,creatcompany,deletcompany,postjob,getlicence}

import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import Company from "../model/Company.model.js";
import Job from "../model/Job.model.js";
import Goverment from "../model/Goverment.model.js";
import User from "../model/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getcompany = AsyncHandler((req, res) => {
    const company = req.company;
    return res.status(200).json({
        company,
    });
});

const creatcompany = AsyncHandler(async (req, res) => {
    const { companyname, email, password } = req.body;
    if (!(companyname && email && password)) {
        throw new ApiError(400, "all filde are requred");
    } else if (await Company.findOne({ $or: [{ companyname }, { email }] })) {
        throw new ApiError(400, "user already exit");
    } else {

    const img_1path=req.files?.img[0]?.path;
    const img_2path=req.files?.img[1]?.path;

     if(!(img_1path || img_2path)){
      throw new ApiError(400,"company logo ang background are required")
     }
     else{
      const bg=await uploadOnCloudinary(img_1path);
      const logo=await uploadOnCloudinary(img_2path);
        const company = Company.creatuser({
            companyname,
            email,
            password,
            bg,
            logo

        });
       return req.status(200).json({
            msg: "user created successfully",
            company,
        });}
    }
});

const deletcompany = AsyncHandler((req, res) => {
    const isdelete = Company.deleteOne({ _id: req.company._id });
    if (isdelete) {
        throw new ApiError(500, "unable to delet");
    } else {
       return  res.status(200).json({
            msg: "user deleted successfully",
        });
    }
});


const postjob = AsyncHandler(async (req, res) => {
    const { title, description, location, salary } = req.body;

    if (!(title && description && location && salary)) {
        throw new ApiError(400, "All fields are required to post a job");
    }

    const job = await Job.create({
        company: req.company._id,
        title,
        description,
        location,
        salary,
    });

    return res.status(201).json({
        message: "Job posted successfully",
        job,
    });
});



const getlicence = AsyncHandler(async (req, res, next) => {
    const companyId = req.company._id;
    const company = await Company.findById(companyId).select("license");
    if (!company) {
        return next(new ApiError("Company not found", 404));
    }
    else{
      const {govId,typeoflicence}=req.body
      if(!govId ||!typeoflicence){
        new ApiError("govId not found", 404)
      }
      else{
        const gov=Goverment.findById(govId)
        if(!gov){
          new ApiError("govId is invalid", 404)
        }
        else{
          const doc_1path=req.files?.document[0]?.path;
          const doc_2path=req.files?.document[1]?.path;
      
           if(!(doc_1path)){
            throw new ApiError(400,"company logo ang background are required")
           }
           else{
            const doc1=await uploadOnCloudinary(doc_1path);
            const doc2=await uploadOnCloudinary(doc_2path);

          req.company.licences.push(doc1)
          if(doc2){
            req.company.licences.push(doc1)
          }
        }
        const isdone1= Company.findOneAndUpdate( {_id:req.company._id}, {licenceToApprove: licences,licencedBy:"to be approved"} )
        const isdone2= Goverment.findOneAndUpdate( {_id:govId}, {licenceToApprove: req.company._id} )
       if(isdone1 && isdone2){
        return res.status(200).job({
          "msg":"successfully applied"
        })
       }

      }
    }
  } 
});





const logincompany=AsyncHandler(async(req,res)=>{
  const {email,password}=req.body
  if(!(email&&password)){
    throw new ApiError(400,"detail not provided")
  }
  else{
    const company=await Company.findOne().select("-password ")
    if(!company){
      throw new ApiError(400,"companyr not found")
    }
    else{
      if(company.isPasswordCorrect(password)){
        refreshToken=company.generateRefreshtoken()
        company.refreshToken=refreshToken;
        await company.save({ validateBeforeSave: false })
        const option={
          httpOnly:true,
          secure:false
        }
       return res.status(200).cookie("refreshToken", refreshToken,option).json(
          {
            "msg":"user login successfully"
          }
        )
      }else{
        throw new ApiError(400,"unauthrized request")
      }

    }
  }


})

export { getcompany, creatcompany, deletcompany, postjob, getlicence,logincompany };
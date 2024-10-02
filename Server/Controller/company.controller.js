import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import Company from "../model/Company.model.js";
import Job from "../model/Job.model.js";
import Licence from "../model/Licence.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getcompany = AsyncHandler((req, res) => {
  const company = req.company;
  return res.status(200).json({
    company,
  });
});




const creatcompany = AsyncHandler(async (req, res) => {

  /*
 * companylogo-r
 * companbg-r
 * companyname-r
 * website-r
 * email-r
 * password-r
*/
  const { companyname, email, password, website } = req.body;
  if (!(companyname && email && password && website)) {

    throw new ApiError(400, "all filde are requred");

  } 
  else if (await Company.findOne({ $or: [{ companyname }, { email }] })) {

    throw new ApiError(400, "user already exit");

  }
   else {

    const img_1path = req.files?.img[0]?.path;
    const img_2path = req.files?.img[1]?.path;

    if (!(img_1path && img_2path)) {

      throw new ApiError(400, "company logo ang background are required")

    }
    else {

      const bg = await uploadOnCloudinary(img_1path);
      const logo = await uploadOnCloudinary(img_2path);
      const company = Company.creatuser({
      logo,
      bg,
      website,
      companyname,
      email,
      password
      });

      return req.status(200).json({
        msg: "user created successfully",
        company,

      });

    }

  }

});



const postjob = AsyncHandler(async (req, res) => {

  /**
 * jobApplyed-obj id
 * jobTitle
 * jobDescription
 * applyLink
 * location
 * salary
 */


  const { title, description, location, salary, link } = req.body;

  if (!(title && description && location && salary && link)) {
    throw new ApiError(400, "All fields are required to post a job");
  }

  const job = await Job.create({
    company: req.company._id,
    title,
    description,
    link,
    location,
    salary,
  });

  return res.status(201).json({
    message: "Job posted successfully",
    job,
  });
});


//to do
const getlicence = AsyncHandler(async (req, res, next) => {

///////to do with pdf /////////

  /*const companyId = req.company._id;
  const company = await Company.findById(companyId).select("license");
  if (!company) {
    return next(new ApiError("Company not found", 404));
  }
  else {
    const { govId, typeoflicence } = req.body
    if (!govId || !typeoflicence) {
      new ApiError("govId not found", 404)
    }
    else {
      const gov = Goverment.findById(govId)
      if (!gov) {
        new ApiError("govId is invalid", 404)
      }
      else {
        const doc_1path = req.files?.document[0]?.path;
        const doc_2path = req.files?.document[1]?.path;

        if (!(doc_1path)) {
          throw new ApiError(400, "company logo ang background are required")
        }
        else {
          const doc1 = await uploadOnCloudinary(doc_1path);
          const doc2 = await uploadOnCloudinary(doc_2path);

          req.company.licences.push(doc1)
          if (doc2) {
            req.company.licences.push(doc1)
          }
        }
        const isdone1 = Company.findOneAndUpdate({ _id: req.company._id }, { licenceToApprove: licences, licencedBy: "to be approved" })
        const isdone2 = Goverment.findOneAndUpdate({ _id: govId }, { licenceToApprove: req.company._id })
        if (isdone1 && isdone2) {
          return res.status(200).job({
            "msg": "successfully applied"
          })
        }

      }
    }
  }*/
});





const logincompany = AsyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (!(email && password)) {
    throw new ApiError(400, "detail not provided")
  }
  else {
    const company = await Company.findOne({email}).select("-password ")
    if (!company) {
      throw new ApiError(400, "companyr not found")
    }
    else {
      if (company.isPasswordCorrect(password)) {
        refreshToken = company.generateRefreshtoken()
        company.refreshToken = refreshToken;
        await company.save({ validateBeforeSave: false })
        const option = {
          httpOnly: true,
          secure: false
        }

        //cookie
        return res.status(200).cookie("refreshToken", refreshToken, option).json(
          {
            "msg": "user login successfully"
          }
        )
      } else {
        throw new ApiError(400, "unauthrized request")
      }

    }
  }


})

export { getcompany, creatcompany, postjob, getlicence, logincompany };
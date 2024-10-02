import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import User from "../model/user.model.js";
import Job from "../model/Job.model.js";

const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  if (!(email && password)) {
    throw new ApiError(400, "Detail not provided");
  }
  
  const user = await User.findOne({ email });
  
  if (!user) {
    throw new ApiError(400, "User not found");
  }
  
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  
  if (!isPasswordCorrect) {
    throw new ApiError(400, "Unauthorized request");
  }

  const refreshToken = await user.generateRefreshtoken();
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .json({ msg: "User logged in successfully" });
});



const createUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!(name && email && password)) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ $or: [{ name }, { email }] });

  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  const img_1path = req.files?.img[0]?.path;

    if (!img_1path) {

      throw new ApiError(400, "company logo ang background are required")

    }
    else {

      const profile = await uploadOnCloudinary(img_1path);
     
  const user = await User.create({
    profile,
    name,
    email,
    password,
  })

  return res.status(200).json({
    msg: "User created successfully",
    user,
  });
}
});





const deleteUser = AsyncHandler(async (req, res) => {
  const result = await User.deleteOne({ _id: req.user._id });
  
  if (result.deletedCount === 0) {
    throw new ApiError(500, "Unable to delete user");
  }

  return res.status(200).json({ msg: "User deleted successfully" });
});

const applyToJob = AsyncHandler(async (req, res) => {
  const { jobId } = req.body;

  if (!jobId) {
    throw new ApiError(400, "Job ID is required");
  }

  const job = await Job.findById(jobId);

  if (!job) {
    throw new ApiError(400, "Invalid job ID");
  }

  return req.user.jobApplied.push(jobId);
  
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { jobApplied: req.user.jobApplied },
    { new: true }
  );

  return res.status(200).json({ msg: "Job applied successfully", user: updatedUser });
});

const getUser = AsyncHandler(async (req, res) => {
  const user = req.user;
  return res.status(200).json({ user });
});

export { loginUser, getUser, createUser, deleteUser, applyToJob };

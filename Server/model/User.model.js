import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import Job from "./Job.model.js";
import jwt from 'jsonwebtoken'


const UserSchema=mongoose.Schema({
    userlogo: {
        type: String,
        require: true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    jwtToken:{
        type:String,
        require:true
    },
    jobApplyed:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:Job,
        require:false
    }]
},{timestamps: true})

UserSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();
   this.password= await bcrypt.hash(this.password,10)
   next()
   })

   UserSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
  }
  UserSchema.methods.generateRefreshtoken = async function(){
    return jwt.sign({
        _id:this._id,
        
      },process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn:process.env.REFRESH_TOKEN_EXPIERY
      }
    )
}

const User=mongoose.model('User',UserSchema);

export default User
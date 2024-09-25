import mongoose from "mongoose";
import Goverment from "./Goverment.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const CompanySchema=mongoose.Schema({
    companyname:{
        type:String,
        require:true
    },
    //to do bg
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    companbg:{
        type:String,
        require:false
    },
    companylogo:{
        type:String,
        require:false
    },
    jwtToken:{
        type:String,
        require:true
       
    },
    licences:[{
        type:String,
        require:false
    }],
    licencedBy:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Goverment,
        require:false
    }]
    //job
},{timestamps: true})


CompanySchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();
   this.password= await bcrypt.hash(this.password,10)
   next()
   })

   CompanySchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
  }
  CompanySchema.methods.generateRefreshtoken = async function(){
    return jwt.sign({
        _id:this._id,
        
      },process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn:process.env.REFRESH_TOKEN_EXPIERY
      }
    )
}

const Company=mongoose.model('Companies',CompanySchema);

export default Company
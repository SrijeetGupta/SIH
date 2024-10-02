import mongoose from "mongoose";
import Company from "./Company.model.js";

/**
 * jobApplyed
 * jobTitle
 * jobDescription
 * applyLink
 * location
 * salary
 */
const JobSchema=mongoose.Schema({

    jobApplyed:{
        type: mongoose.Schema.Types.ObjectId,
        ref:Company,
        require:true
    },
    jobTitle:{
        type:String,
        require:true
    },
    jobDescription:{
        type:String,
        require:true
    },
    applyLink:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    }, 
    salary:{
        type:String,
        require:true
    }

},{timestamps: true})


const Job=mongoose.model('Jobs',JobSchema);

export default Job
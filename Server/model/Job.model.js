import mongoose from "mongoose";
import Company from "./Company.model.js";


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
    }

},{timestamps: true})


const Job=mongoose.model('Jobs',JobSchema);

export default Job
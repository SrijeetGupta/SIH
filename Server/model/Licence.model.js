import mongoose from "mongoose";

import Company from "./Company.model";
import Goverment from "./Goverment.model";



const LicenceSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    company:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:Company,
        require:true
    }],
    goverment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:Goverment,
        require:true
    }],
    status:{
        type:String,
        enum:['In progress',"Accepted","Rejected"],
        require:true,
    }
},{timestamps: true})



const Licence=mongoose.model('Licence',LicenceSchema);

export default Licence
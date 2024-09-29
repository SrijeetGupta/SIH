import mongoose from "mongoose";
import Goverment from "./Goverment.model.js";
import Licence from "./Licence.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

/** 
 * companylogo
 * companbg
 * companyname
 * email
 * password
 * jwtToken
 * licenced
 * job
*/

const CompanySchema = mongoose.Schema({
    companylogo: {
        type: String,
        require: true
    },
    companbg: {
        type: String,
        require: true
    },
    website: {
        type: String,
        require: true
    },
    companyname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    jwtToken: {
        type: String,
        require: true

    },
    licenced: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Licence,
        require: false
    }],
    job: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Job,
        require: false
    }]

}, { timestamps: true })


CompanySchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})



CompanySchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}




CompanySchema.methods.generateRefreshtoken = async function () {
    return jwt.sign({
        _id: this._id,

    }, process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIERY
        }
    )
}

const Company = mongoose.model('Companies', CompanySchema);

export default Company
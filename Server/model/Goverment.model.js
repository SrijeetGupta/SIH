import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
const GovermentSchema = mongoose.Schema({
    govermentName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    jwtToken: {
        type: String,
        required: true
    },
    typeOfLicence: [
        {
            type: String
        }
    ],
    licenced: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Licence,
        require: false
    }]
   
},{timestamps: true});

GovernmentSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

GovernmentSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
};

GovernmentSchema.methods.generateRefreshtoken = async function(){
    return jwt.sign({
        _id:this._id,
        
      },process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn:process.env.REFRESH_TOKEN_EXPIERY
      }
    )
}

const Goverment = mongoose.model('Goverment', GovernmentSchema);

export default Goverment;

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app=express();


//cors allowe us to set cross origin resource sharing
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//seeting the max flow of json data
app.use(express.json({limit:'16kb'}))
//use to manage url
app.use(express.urlencoded({extended: true, limit: "16kb"}))
//to store some temperoey data in public folder
app.use(express.static("public"))
//it allow the server to preform crud operation of clint cookie
app.use(cookieParser());


//router import

import userRouter from './routes/user.rout.js'
import govermentRouter from './routes/goverment.rout.js'
import jobRouter from './routes/job.rout.js'
import companyRouter from './routes/company.rout.js'

 


app.use('/api/v1/users',userRouter)
app.use('/api/v1/goverment',govermentRouter)
app.use('/api/v1/job',jobRouter)
app.use('/api/v1/company',companyRouter)

app.get('/status', (req, res) => {
    res.send('Server is running!');
});





export {app};
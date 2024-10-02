import { Router } from "express";
import { upload } from "../middleware/multer.middlewares.js";

import { loginUser, getUser, createUser, applyToJob } from '../Controller/user.controller.js'
import { verifyUser } from "../middleware/user.auth.middleware.js";

const router=Router()

router.route('/creatuser').post(upload.fields([
    {
        name:'img',
        maxCount:1
       }
]),createUser);

router.route('/loginuser').post(loginUser);

router.route('/getuser').get(verifyUser,getUser);

router.route("/applytojob").post(verifyUser,applyToJob);


export default router


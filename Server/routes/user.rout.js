import { Router } from "express";


import { loginUser, getUser, createUser, deleteUser, applyToJob } from '../Controller/user.controller.js'
import { verifyUser } from "../middleware/user.auth.middleware.js";

const router=Router()


router.route('/getuser').get(verifyUser,getUser);

router.route('/loginuser').post(loginUser);

router.route('/creatuser').post(createUser);

router.route("/deletuser").post(verifyUser,deleteUser);

router.route("/applytojob").post(verifyUser,applyToJob);


export default router


import { Router } from "express";



import {Approvelicence,getgov,Rejectlicence,creatgoverment,getallgov,logingov} from '../Controller/goverment.controller.js'
import { verifyGov } from "../middleware/gov.auth.middleware.js";

const router=Router()

router.route('/getallgov').get(getallgov)
router.route('/getgov').get(verifyGov,getgov)
router.route('/Approvelicence').post(verifyGov,Approvelicence)

router.route('/Rejectlicence').post(verifyGov,Rejectlicence)

router.route('/creatgov').post(creatgoverment)

router.route('logingov').post(logingov)



export default router
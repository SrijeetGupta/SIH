import { Router } from "express";



import {Approvelicence,getgov,Rejectlicence,creatgoverment,getallgov,logingov} from '../Controller/goverment.controller.js'
import { verifyGov } from "../middleware/gov.auth.middleware.js";

const router=Router()



router.route('/creatgov').post(creatgoverment);
router.route('/logingov').post(logingov);

router.route('/getgov').get(verifyGov,getgov);


router.route('/getallgov').get(getallgov)


router.route('/Approvelicence').post(verifyGov,Approvelicence)

router.route('/Rejectlicence').post(verifyGov,Rejectlicence)







export default router
import { Router } from "express";
import { upload } from "../middleware/multer.middlewares.js";




import {creatcompany,deletcompany,getcompany,getlicence,postjob,logincompany} from '../Controller/company.controller.js'
import { verifyCompany } from "../middleware/company.auth.js";

const router=Router()

router.route('/logincompany').get(logincompany);
router.route('/getcompany').get(verifyCompany, getcompany);

router.route(upload.fields([
    {
        name:'img',
        maxCount:2
       }
]),'/creatcompany').post(creatcompany);


router.route("/postjob").post(verifyCompany,postjob);


router.route("/getlicence").post(verifyCompany,upload.fields([
    {
        name:'document',
        maxCount:2
       }
]),getlicence);






export default router  
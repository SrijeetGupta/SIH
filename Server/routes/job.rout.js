import { Router } from "express";
// import controller 

import {getjob} from '../Controller/job.controller.js'
const router=Router()


router.route('/getjob').get(getjob)


export default router
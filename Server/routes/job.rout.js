import { Router } from "express";

import {getjob} from '../Controller/job.controller.js'
const router=Router()


router.route('/getjob').get(getjob)


export default router
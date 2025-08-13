import { Router } from "express";
import {sendComplaint} from '../CTRL/CTRLcomplaints.js'

 
const router = Router();

router.post('/',sendComplaint)

export default router;
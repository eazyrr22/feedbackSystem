import { Router } from "express";
import {getAllComplaints,sendComplaint} from '../CTRL/CTRLcomplaints.js'

 
const router = Router();

router.post('/',sendComplaint)
router.get('/',getAllComplaints)

export default router;
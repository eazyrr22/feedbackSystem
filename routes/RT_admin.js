import { Router } from "express";
import {isAdmin} from '../middleware/login.js'
import { getAllComplaints,accessError } from "../CTRL/CTRLadmin.js";

const router = Router();

router.post('/',isAdmin,getAllComplaints)
router.all('/access_denied',accessError)

export default router;
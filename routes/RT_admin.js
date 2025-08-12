import { Router } from "express";
import {isAdmin} from '../middleware/login.js'

const router = Router();

router.get('admin',isAdmin)

export default router;
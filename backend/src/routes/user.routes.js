import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";


const router=Router();

router.route('/register').post(registerUser);//Route Path: /register (from user.routes.js)
export default router;

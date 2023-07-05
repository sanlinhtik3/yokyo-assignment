import express from "express";
import { generateOTP } from "../controllers/appController.js";
const router = express.Router();

router.get("/generateOTP", generateOTP);

export default router
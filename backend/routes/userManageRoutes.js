import express from "express";
import { allUsers, getUser, updateUser } from "../controllers/userManageController.js";
const router = express.Router();

router.get("/", allUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);

export default router;

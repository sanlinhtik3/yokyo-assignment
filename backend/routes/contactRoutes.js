import express from "express";
import { createContact, deleteContact, getContact, getContacts, updateContact } from "../controllers/contactController.js";
const router = express.Router();

router.get('/', getContacts)
router.get("/:contact_id", getContact);
router.post("/", createContact);
router.patch("/:contact_id", updateContact);
router.delete("/:contact_id", deleteContact);

export default router;
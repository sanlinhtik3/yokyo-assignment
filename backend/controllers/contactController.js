import expressAsyncHandler from "express-async-handler";
import ContactA from "../models/contactModel.js";


const getContact = expressAsyncHandler(async (req, res) => {
  const { contact_id } = req.params
  const Contact = await ContactA.findById(contact_id);
  return res.json(Contact);
});

const getContacts = expressAsyncHandler(async (req, res) => {
  const Contact = await ContactA.find()
  return res.json(Contact);
});

const createContact = expressAsyncHandler(async (req, res) => {
  const Contact = await ContactA.create(req.body)
  return res.status(200).json(Contact)
});

const updateContact = expressAsyncHandler(async (req, res) => {
  const { contact_id } = req.params;
  const updatedContact = await ContactA.findByIdAndUpdate(contact_id, req.body, { new: true });
  return res.json(updatedContact);
});

const deleteContact = expressAsyncHandler(async (req, res) => {
  const { contact_id } = req.params;
  const deletedContact = await ContactA.findByIdAndDelete(contact_id);
  return res.json(deletedContact);
});


export { getContact, getContacts, createContact, updateContact, deleteContact };
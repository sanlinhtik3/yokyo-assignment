import expressAsyncHandler from "express-async-handler"
import User from "../models/userModel.js"

// @desc    Auth user & get token
// @route   GET /api/manage-users/id
// @access  Private
const getUser = expressAsyncHandler(async(req, res) => {
    const {id} = req.params 
    const user = await User.findById(id)

    return res.json(user)
})

// @desc    Auth user & get token
// @route   GET /api/manage-users
// @access  Private
const allUsers = expressAsyncHandler(async(req, res) => {
    const users = await User.find()

    return res.json(users)
})

// @desc    Auth user & get token
// @route   GET /api/manage-users
// @access  Private
const updateUser = expressAsyncHandler(async(req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.access = req.body.access || user.access;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      return res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password,
        access: updatedUser.access,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
})

export {getUser,allUsers, updateUser}
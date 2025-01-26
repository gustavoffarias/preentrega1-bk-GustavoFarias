import express from "express";
import {
  getAllUsers,
  registerUser,
  saveUser,
  getUser,
  getUserById,
} from "../controllers/user.controller.js";
import { validateUser } from "../middlewares/userValidations.js";

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/register", validateUser, registerUser);
userRoutes.get("/", getUser);
userRoutes.post("/", saveUser);
userRoutes.get("/:uid", getUserById);

export default userRoutes;

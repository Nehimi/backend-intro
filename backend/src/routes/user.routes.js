import { Router } from "express";
import { registerUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

// CREATE - Register new user
router.post("/register", registerUser);

// READ - Get all users
router.get("/", getAllUsers);

// READ - Get user by ID
router.get("/:id", getUserById);

// UPDATE - Update user by ID
router.put("/:id", updateUser);

// DELETE - Delete user by ID
router.delete("/:id", deleteUser);

export default router;

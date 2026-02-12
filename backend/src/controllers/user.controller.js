import User from "../models/User.js";

// CREATE - Register User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            });
        }
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists"
            });
        }
        
        // Create new user
        const user = new User({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: password // We'll add hashing later
        });
        
        // Save to database
        const savedUser = await user.save();
        
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                name: savedUser.name,
                email: savedUser.email,
                createdAt: savedUser.createdAt
            }
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Registration failed",
            error: error.message
        });
    }
};

// READ - Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            count: users.length,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve users",
            error: error.message
        });
    }
};

// READ - Get User by ID
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).select('-password');
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve user",
            error: error.message
        });
    }
};

// UPDATE - Update User
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        
        const user = await User.findByIdAndUpdate(
            id, 
            { name, email }, 
            { new: true, runValidators: true }
        ).select('-password');
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update user",
            error: error.message
        });
    }
};

// DELETE - Delete User
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete user",
            error: error.message
        });
    }
};

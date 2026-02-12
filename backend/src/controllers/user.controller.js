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
        
        // For now, just return the user data (we'll add database logic later)
        const user = {
            name,
            email,
            password: "hashed_password_placeholder" // We'll add hashing later
        };
        
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Registration failed",
            error: error.message
        });
    }
};

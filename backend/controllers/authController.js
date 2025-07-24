import User from "../models/user.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        
        console.log('Received signup request:', { username, email, password: '***' });
        
        // Validate required fields
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        // Create new user
        const newUser = new User({ 
            userName: username, // Map username to userName
            email, 
            password 
        });
        
        await newUser.save();
        console.log('User created successfully:', newUser.email);
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error('Signup error:', error);
        if (error.code === 11000) {
            return res.status(400).json({ message: "User already exists" });
        }
        next(errorHandler(500, "Internal server error"));
    }
};

export { signup };
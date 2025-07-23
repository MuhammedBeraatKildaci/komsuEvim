import User from "../models/user.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) => {
    const { userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ userName, email, password: hashedPassword });
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        next(errorHandler(500, "Internal server error"));
    }
};

export { signup };
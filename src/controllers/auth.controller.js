const authModel = require('../models/user.model');

module.exports = {
    register: (req, res) => {
        const userData = req.body;
        const existing = authModel.findUserByEmail(userData.email);
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        const newUser = authModel.register(userData);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        });
    },

    login: (req, res) => {
        const { email, password } = req.body;

        const user = authModel.findUserByEmail(email);
        if (!user || user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        res.json({
            success: true,
            message: "Login successful",
            data: { id: user.id, email: user.email }
        });
    }
};

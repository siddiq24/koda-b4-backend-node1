const authModel = require('../models/user.model');

/**
 * POST /auth/register
 * @summary Register a new user
 * @tags Auth
 * @param {object} request.body.required - User registration data
 * @example request - Example user data
 * {
 *   "email": "example@example.com",
 *   "password": "yourpassword"
 * }
 * @return {object} 201 - User registered successfully
 * @return {object} 400 - Email already exists
 */
function register(req, res) {
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
}

/**
 * POST /auth/login
 * @summary Login a user
 * @tags Auth
 * @param {object} request.body.required - User login data
 * @example request - Example user login data
 * {
 *   "email": "example@example.com",
 *   "password": "yourpassword"
 * }
 * @return {object} 200 - User logged in successfully
 * @return {object} 401 - Invalid email or password
 */
function login(req, res) {
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


module.exports = { register, login };

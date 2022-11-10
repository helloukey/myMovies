const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Create JWT token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET_KEY, {expiresIn: "30 days"});
}

// login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = await createToken(user._id);
        res.status(200).json({userId: user._id, firstName: user.firstName, token});
    } catch (error) {
        res.status(400).json({error: error.message}); 
    }
};

// register
const registerUser = async (req, res) => {
    const { firstName, email, password } = req.body;

    try {
        const user = await User.register(firstName, email, password);
        const token = await createToken(user._id);
        res.status(200).json({userId: user._id, firstName: user.firstName, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { loginUser, registerUser };
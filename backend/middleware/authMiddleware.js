const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const asyncHandler = require('express-async-handler')

const protect = asyncHandler( async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get Token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from token
            req.user = await userModel.findById(decoded.id).select('-password');
            next();

        } catch (error) {
            console.log(error);
            res.status(401).json({success: false, message: error.message});
            throw new Error('Not Authorized');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token'); 
    }
})

module.exports = { protect };
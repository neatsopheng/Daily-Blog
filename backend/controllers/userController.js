const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const userModel = require("../models/userModel");


// @desc    add user
// @route   POST /api/users
// @access  public
const register = async (req, res, next) => {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        res.status(400);
        const error = new Error('Please add all field');
        return next(error);
    }
    
    // // checking registered email
    const existedEmail = await userModel.findOne({email});
    if (existedEmail) {
        return res.json({success: false, message: "Email already exist"});
    }
    // encrypting password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    try {
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })
        await newUser.save();
        const user = newUser;
        res.status(201).json({success: true, message: "Registered", 
            user: {_id: user.id,
            name: user.name,
            email: user.email}
        })
    } catch (error) {
        res.status(500).json({success:false, message: error.message})
    }
}

const login = asyncHandler( async (req, res) => {
    const {email, password} = req.body;
    const user = await userModel.findOne({email});
    if (!user) {
        res.status(404);
        throw new Error('User not existed');
    }
    
    if (await bcrypt.compare(password, user.password)) {
        res.status(200).json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                token: genToken(user.id, user.email)
            },
        })
    }
    else {
        res.status(400);
        throw new Error('Incorrect password');
    }
})

// @desc    get all user
// @route   GET /api/users
// @access  private
const getAllUser = async (req, res) => {
    
    try {
        const user = await userModel.find();
        res.json({success: true, user})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
// @desc    get all user
// @route   GET /api/users
// @access  private
const getUser = async (req, res) => {
        res.json(req.user);
}


// @desc    get all user
// @route   PUT /api/users
// @access  private
const updateUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await userModel.findById(req.params.id);
        const newUser = await userModel.findByIdAndUpdate(user.id, {
            name: name,
            email: email,
            password: password,
        })
        // const newwww = await newUser;
        newUser.save();

        res.json({success: true, user})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


// @desc    delete user
// @route   DELETE /api/users
// @access  private
const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        const allUser = userModel.find({})
        await userModel.findByIdAndDelete(user.id);
        res.status(200).json({success: true, message: "Deleted user", allUser});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

const genToken = (id, email) => {
    return jwt.sign({id, email}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
    
}

module.exports = {getAllUser, getUser, register, login, deleteUser, updateUser};
const asyncHandler = require('express-async-handler');
const postModel = require('../models/postModel');
const userModel = require('../models/userModel');


// @desc    Post Blogs
// @route   POST /api/blogs
// @access  private
const postBlog = asyncHandler(
    async (req, res) => {
        const currentUser = await userModel.findById(req.user.id);
        
        try {
            const newPost = new postModel({
                title: req.body.title,
                content: req.body.content,
                userId: req.user.id,
            })
            await newPost.save();
            res.status(201).json({ message: "Saved", newPost})
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
)

// @desc    Get blogs
// @route   GET /api/blogs
// @access  private
const getAllBlog = asyncHandler(
    async (req, res) => {
        const blogs = await postModel.find({userId: req.user.id});
        res.status(200).json({success: true, blogs })
        console.log(req.user.id)
        if (!blogs) {
            return res.status(404).json({success: false, message: "Blog not found"});
        }
    }
)
// @desc    Get blogs 66b9d88ae461191c30dcedd7
// @route   GET /api/blogs
// @access  private
const getUserBlog = asyncHandler(
    async (req, res) => {
        // const user = await userModel.find();
        const blogs = await postModel.find({userId: req.user.id})
        res.status(200).json({success: true, userId: req.user.id, blogs })

        if (!user) {
            return res.json({message: "User not found"})
        }
        if (!blogs) {
            return res.status(404).json({success: false, message: "Blog not found"});
        }
    }
)
// @desc    Update blogs
// @route   Update /api/blogs/:id
// @access  private
const updateBlog = asyncHandler( async (req, res) => {
    // 1. find user in userModel
    // 2. check if the user is the one who logged in for this operation on this blog
    if (!req.user.id) {
        res.status(401);
        throw new Error('User not found');
    }

    const blog = await postModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content,
    })
    blog.save()
    res.status(201).json({ message: "Updated blog"})
    if (!blog) {
        return res.status(404).json({message: "Failed"})
    }
})
// @desc    Update blogs
// @route   Update /api/blogs/:id
// @access  private
const deleteBlog = asyncHandler( async (req, res) => {
    res.status(201).json({ message: "Deleting blog"})
})



module.exports = {getAllBlog, getUserBlog, postBlog, updateBlog, deleteBlog}
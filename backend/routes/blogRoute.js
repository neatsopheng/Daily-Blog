const express = require('express');
const {getAllBlog, postBlog, updateBlog, deleteBlog, getUserBlog} = require('../controllers/blogCountroller')

const blogRouter = express();
const {protect} = require('../middleware/authMiddleware')

blogRouter.route('/').get(protect,getAllBlog).post(protect, postBlog);
blogRouter.route('/user/:blog_id').put(protect, updateBlog).delete(protect, deleteBlog)
blogRouter.route('/user/:blog_id').get(protect, getUserBlog);

module.exports = blogRouter;
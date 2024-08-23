const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Please add a name']},
    email: {type: String, required: [true, 'Please add an email'], unique: true},
    password: {type: String, required: [true, 'Password is required']},
    // posts: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'Post'}]
}, {
    timestamps: true,
    minimize: false
})


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
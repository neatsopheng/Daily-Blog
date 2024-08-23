const mongoose = require('mongoose');

const user = {
    userId: {type: String, required: true},
    name: {type: String, required: true}
}

const postSchema = new mongoose.Schema({
    title: {type: String, require: true},
    content: {type: String, require: true},
    userId: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User'},
    
},
{
    timestamps: true
})

const postModel = mongoose.model.post || mongoose.model('Post', postSchema);

module.exports = postModel;
const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    }
});

const Post = mongoose.model('Post', trackerSchema); // Change model name to 'Post'

module.exports = Post;

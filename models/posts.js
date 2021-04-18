const mongoose = require ("mongoose");
const PostSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: false,
    }
});

exports.Posts = mongoose.model('Posts', PostSchema);
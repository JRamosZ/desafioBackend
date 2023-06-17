const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postAuthor: {
        type: String,
        require: true,
    },
    postAuthorId: {
        type: String,
        
    },
    postContent: {
        type: String,
        require: true,
    },
    postDateDay: {
        type: Date,
    },
    postDateMonth:{
        type: String,
    },
    postImageURL:{
        type: String,
        require: true,
    },
    postReadTime:{
        type: String,
        require: true,
    },
    postRelevance:{
        type: String,
        require: true,
    },
    postTags: {
        type: Array,
    },
    postTitle:{
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("Posts", postSchema, "Posts");
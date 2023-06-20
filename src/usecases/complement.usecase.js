const createError = require("http-errors");
const Post = require("../models/post.model");

const update = async (id, data, request) => {
    const post = await Post.findById(id)
    console.log(post)
    const updatedData = post.postComments
    updatedData.push(data)
    console.log('Data', data)
    console.log('updatedData', updatedData)
    const updatedPost = Post.findByIdAndUpdate(id, {postComments : updatedData}, {
        returnDocument: "after",
    });
    if (!updatedPost) throw createError(404, "Post not found");
    return updatedPost;
};

module.exports = update;
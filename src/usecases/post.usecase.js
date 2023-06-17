const bcrypt = require('bcrypt')
const createError = require('http-errors')
const Post = require('../models/post.model')
const jwt = require('../lib/jwt.lib')

const list = () => {
    const posts = Post.find();
    return posts
}

const get = async (id) => {
    const post = await Post.findById(id);
    if(!post) throw createError(404, 'Post not found')
    return post
}

const create = (data) => {
    const post = Post.create(data)
    return post
}

const deleteById = async(id) => {
    const post = await Post.findByIdAndDelete(id)
    if(!post) throw createError(404, 'Post not found')
    return post
}

const update = async(id, data) =>{
    const post = await Post.findByIdAndUpdate(id, data, { returnDocument : "after" })
    if(!post) throw createError(404, 'Post not found')
    return post

}

module.exports = { list, get, create, deleteById, update }
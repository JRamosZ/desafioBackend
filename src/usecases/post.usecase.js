const createError = require("http-errors");
const Post = require("../models/post.model");
const jwt = require("../lib/jwt.lib");

const list = () => {
  const posts = Post.find();
  return posts;
};

const get = async (id) => {
  const post = await Post.findById(id);
  if (!post) throw createError(404, "Post not found");
  return post;
};

const create = (data) => {
  const post = Post.create(data);
  return post;
};

const deleteById = async (id, request) => {
  const post = await Post.findById(id);
  const authorization = request.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");
  const isVerified = jwt.verify(token);
  if (isVerified.id != post.postAuthorId)
    throw createError(403, "No tienes permiso de eliminar a este post");
  const deletedPost = await Post.findByIdAndDelete(id);
  if (!deletedPost) throw createError(404, "Post not found");
  return deletedPost;
};

const update = async (id, data, request) => {
  const post = await Post.findById(id);
  const authorization = request.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");
  const isVerified = jwt.verify(token);
  if (isVerified.id != post.postAuthorId)
    throw createError(403, "No tienes permiso de editar a este post");
  const updatedPost = await Post.findByIdAndUpdate(id, data, {
    returnDocument: "after",
  });
  if (!updatedPost) throw createError(404, "Post not found");
  return updatedPost;
};

module.exports = { list, get, create, deleteById, update };

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userEducation: {
    type: String,
  },
  userEmail: {
    type: String,
    match: /^.*@.*\..*$/,
    require: true,
    unique: true,
  },
  userImage: {
    type: String,
  },
  userJoined: {
    type: String,
  },
  userLastname: {
    type: String,
    require: true,
  },
  userLocation: {
    type: String,
  },
  userName: {
    type: String,
    require: true,
  },
  userNickName: {
    type: String,
  },
  userPassword: {
    type: String,
    require: true,
  },
  userPosts: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Posts' }]
});

module.exports = mongoose.model("Users", userSchema, "Users");

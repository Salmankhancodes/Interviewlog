const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    companyname: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    noofrounds: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)

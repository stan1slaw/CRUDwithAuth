const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const Posts = new Schema(
  {
    title_name: {
      type: String,
      required: true
    },
    text_name: {
      type: String,
      maxlength: 200
    }
  },
  {
    collection: "posts"
  }
);
module.exports = mongoose.model("Posts", Posts);

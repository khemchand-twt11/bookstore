const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
    },
    Author: {
      type: String,
    },
    Genre: {
      type: String,
    },
    Description: {
      type: String,
    },
    Price: {
      type: Number,
    },
    Image: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const bookModel = mongoose.model("Book", bookSchema);
module.exports = bookModel;

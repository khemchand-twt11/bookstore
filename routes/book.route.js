const express = require("express");
const bookModel = require("../models/book.model");
const bookRoute = express.Router();

bookRoute.post("/add", async (req, res) => {
  const { Title, Author, Genre, Description, Price, Image } = req.body;

  if (!Title || !Author || !Genre || !Description || !Price) {
    return res.status(400).json({ msg: "some  fields are missing" });
  }
  const bookData = new bookModel({
    Title,
    Author,
    Genre,
    Description,
    Price,
    Image,
  });
  await bookData.save();
  res.status(201).json({ msg: "Data Added Successfully" });
});
bookRoute.get("/all", async (req, res) => {
  const data = await bookModel.find();
  res.status(200).json({ data });
});
bookRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = await bookModel.deleteOne({ _id: id });
  res.status(200).json({ msg: "Book Deleted Successfully", data });
});
bookRoute.get("/sort", async (req, res) => {
  const { val } = req.query;

  const q = val === "asc" ? 1 : -1;
  const data = await bookModel.find().sort({ Price: q });
  res.status(200).json(data);
});
bookRoute.get("/filter", async (req, res) => {
  const { val } = req.query;
  const data = await bookModel.find({ Genre: val });
  res.status(200).json(data);
});

module.exports = bookRoute;

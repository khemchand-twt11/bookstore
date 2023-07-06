const express = require("express");
const cors = require("cors");
const connection = require("./configs/db");
const bookRoute = require("./routes/book.route");
const PORT = process.env.PORT || 8000;
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
//ROUTE
app.use("/hello", (req, res) => {
  return res.status(200).send({ msg: "hello from server" });
});
app.use("/book", bookRoute);
app.listen(PORT, async () => {
  try {
    await connection();
    console.log(`Server is running at port ${PORT}`);
  } catch (error) {
    console.log("error", error);
  }
});

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* - - - CONTROLLERS - - - */
const postsController = require("./controllers/postsController");

/* - - - ROUTES - - - */

app.use("/posts", postsController);

app.get("/", (req, res) => {
  return res.send("Welcome To Reflections");
});

/* - - - 404 - - - */
app.get("*", (req, res) => {
  return res.status(404).json({
    Error: "GET request unsuccessful.",
    message: "Page Not Found! Please try again.",
  });
});

module.exports = app;

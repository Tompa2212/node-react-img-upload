const express = require("express");
const uploadRoute = require("./routes/upload");
const cors = require("cors");

const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Image Upload API</h1>");
});

app.use("/uploads", uploadRoute);

app.listen(port, console.log("Listening on port " + port));

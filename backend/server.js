const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect("mongodb://mongo:27017/studentdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// API Route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

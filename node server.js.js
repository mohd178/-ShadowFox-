const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Contact form endpoint
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New message:", name, email, message);
  res.json({ success: true, message: "Message received! We'll get back to you soon." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

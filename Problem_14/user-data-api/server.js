const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files (front-end)
app.use(express.static("public"));

// Route to get user data from the JSON file
app.get("/api/users", (req, res) => {
  fs.readFile(path.join(__dirname, "data.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading user data.");
      return;
    }
    console.log("User Data:", JSON.parse(data)); // Log data to the terminal
    res.json(JSON.parse(data));
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static frontend files
app.use(express.static("public"));

// Serve employee data API
app.get("/api/employees", (req, res) => {
  fs.readFile(path.join(__dirname, "employees.json"), "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading employee data.");
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

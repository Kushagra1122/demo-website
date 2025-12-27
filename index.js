const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from Auto-Deployed Website UPDATED 🚀</h1>");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

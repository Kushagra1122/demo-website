const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from Auto-Deployed Website UPDATED again 🚀</h1>");
});

const PORT = process.env.PORT || 3001;

// Export app for testing
module.exports = app;

// Only start server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

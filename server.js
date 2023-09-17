const express = require("express");
const app = express();
const PORT = 5777;

app.use(express.static(__dirname)); // This serves static files from the current directory

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

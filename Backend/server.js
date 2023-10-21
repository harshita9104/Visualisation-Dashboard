const express = require("express");
const app = express();
// const PORT = process.env.PORT || 3480;
app.get("/", (req, res) => {
  res.send(`hello`);
});
app.listen(3470, () => {
  console.log(`server is running on port`);
});

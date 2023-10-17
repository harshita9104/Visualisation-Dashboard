const express = require("express");
const app = express();
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});
app.listen(3670, () => {
  console.log("server started ");
});

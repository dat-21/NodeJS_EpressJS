const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // định nghĩa tuyến đường (route)
  res.send("Hello World!");
});

//127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

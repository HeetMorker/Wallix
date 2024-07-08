const express = require("express");
const app = express();
const db = require("./config/database");

const port = 8088;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(port, () => {
  db();
  console.log(`Server running on http://localhost:${port}`);
});

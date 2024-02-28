const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.send("Serwer działa");
});

app.listen(8888, () => {
  console.log("Aplikacja wystartowała na porcie 8888");
});

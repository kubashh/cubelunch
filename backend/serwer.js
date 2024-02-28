const express = require("express");
const app = express();

// Dodaj nagłówek CORS na serwerze
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // '*': zezwala na dostęp z dowolnej domeny
  next();
});

app.get("/", (req, res) => {
  console.log(req);
  res.send("Serwer działa");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

app.listen(8888, () => {
  console.log("Aplikacja wystartowała na porcie 8888");
});

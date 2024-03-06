const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

app.use(bodyParser.json());

const corsOptions = {
  origin: "https://kubashh.github.io/", // Ustaw domenę, z której zezwalasz na żądania
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Włącz obsługę nagłówka credentials
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

const port = 8888;

const snakes = [];

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

app.listen(port, () => {
  console.log(`Aplikacja wystartowała na porcie {port}`);
});

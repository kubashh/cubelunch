const express = require("express");
//const cors = require("cors");
const app = express();

app.use(express.json());

/*const corsOptions = {
  origin: "https://kubashh.github.io/", // Ustaw domenę, z której zezwalasz na żądania
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Włącz obsługę nagłówka credentials
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));*/

const port = 8888;

const snakes = [];
const board = [];

// Dodaj nagłówek CORS na serwerze
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "https://kubashh.github.io"); // zezwól na dostęp z dowolnej domeny
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/", async (req, res) => {
  console.log(req);
  res.send("Serwer działa");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Serwer działa");
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`Aplikacja wystartowała na porcie ${port}`);
});

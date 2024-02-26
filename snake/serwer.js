const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Utwórz tablicę 100x100 wypełnioną zerami
const array100x100 = Array.from({ length: 100 }, () => Array(100).fill(0));

// Obsługa żądania POST do modyfikacji tablicy
app.post('/modifyArray', (req, res) => {
  const { row, column, value } = req.body;

  // Sprawdź czy dane są poprawne
  if (typeof row === 'number' && typeof column === 'number' && typeof value === 'number') {
    // Sprawdź, czy pozycje są w zakresie tablicy
    if (row >= 0 && row < 100 && column >= 0 && column < 100) {
      // Modyfikuj tablicę na serwerze
      array100x100[row][column] = value;
      res.json({ success: true });
    } else {
      res.status(400).json({ error: 'Nieprawidłowe pozycje w tablicy' });
    }
  } else {
    res.status(400).json({ error: 'Nieprawidłowe dane przesłane z klienta' });
  }
});

// Endpoint do pobierania aktualnej tablicy
app.get('/getArray', (req, res) => {
  res.json(array100x100);
});

app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});

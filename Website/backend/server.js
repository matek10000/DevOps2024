const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// polaczenie z baza
const db = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'userpassword',
  database: 'website_db'
});

db.connect(err => {
  if (err) {
    console.error('Blad polaczenia z baza', err);
  } else {
    console.log('Polaczono z baza');
  }
});

// odbieranie danych
app.get('/data', (req, res) => {
  db.query('SELECT * FROM messages', (err, results) => {
    if (err) {
      console.error('blad zapytania:', err);
      res.status(500).send('Blad bazy danych');
    } else {
      res.json(results);
    }
  });
});

// dodawanie do bazy
app.post('/data', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send('Brak wiadomosci do wyswietlenia');
  }

  db.query('INSERT INTO messages (message) VALUES (?)', [message], (err, result) => {
    if (err) {
      console.error('Blad zapytania do bazy danych:', err);
      res.status(500).send('Blad bazy danych');
    } else {
      res.status(201).send('Wiadomosc dodana');
    }
  });
});

// Uruchomienie serwera
app.listen(port, () => {
  console.log(`Serwer dziala na porcie: ${port}`);
});

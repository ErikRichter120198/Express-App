const express = require('express');
const app = express();
const port = 3000;

// Beispiel-Daten
const hobbies = ['Lesen', 'Schwimmen', 'Radfahren'];
const shoppingList = ['Milch', 'Brot', 'Eier'];

// Endpunkt für Hobbys
app.get('/hobbies', (req, res) => {
  res.json(hobbies);
});

// Endpunkt für die Einkaufsliste
app.get('/shopping-list', (req, res) => {
  res.json(shoppingList);
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});

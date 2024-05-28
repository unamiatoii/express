// app.js

const express = require('express');
const app = express();
const port = 3000;

// Route de base
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route avec un paramètre dynamique
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Utilisateur ID : ${userId}`);
});

// Route avec une méthode POST
app.post('/user', (req, res) => {
  res.send('Requête POST reçue');
});

// Route avec une méthode PUT
app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Utilisateur ID : ${userId} mis à jour`);
});

// Route avec une méthode DELETE
app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Utilisateur ID : ${userId} supprimé`);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});

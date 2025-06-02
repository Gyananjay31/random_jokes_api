const express = require('express');
const app = express();
const PORT = 3000;

// Dummy route
app.get('/', (req, res) => {
  res.send('Welcome to the Random Jokes API!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don’t programmers like nature? It has too many bugs.",
  "Why do JavaScript developers wear glasses? Because they don’t C#.",
  "I told my computer I needed a break, and it said 'No problem – I’ll go to sleep.'"
];


app.get('/api/jokes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  res.json({ joke });
});

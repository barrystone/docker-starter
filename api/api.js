const express = require('express');
const cors = require('cors');

const app = express();

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors());

app.get('/', (req, res) => {
  res.json([
    { id: 1, title: 'This is title 1.' },
    { id: 2, title: 'This is title 2.' },
    { id: 3, title: 'This is title 3.' }
  ]);
});

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});

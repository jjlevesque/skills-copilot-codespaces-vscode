// Create web server 

// Importing modules
const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');

// Using express module
const app = express();

// Using body-parser
app.use(bodyParser.json());

// GET request
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// POST request
app.post('/comments', (req, res) => {
  const { id, comment } = req.body;
  comments.addComment(id, comment);
  res.status(201).json(comments.getComments());
});

// PUT request
app.put('/comments/:id', (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  comments.updateComment(id, comment);
  res.json(comments.getComments());
});

// DELETE request
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments.deleteComment(id);
  res.json(comments.getComments());
});

// Listening to port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
   

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all requests

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contact_us',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// POST endpoint to handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.execute(query, [name, email, message], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error saving message', details: err });
    }
    res.status(200).json({ message: 'Message sent successfully', id: result.insertId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 9000;

app.use(cors()); // Add this line to enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4@Komalparag', // Replace with your MySQL password
    database: 'tourism'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
});

// GET endpoint for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Tourism Registration Form backend server!');
});

// POST endpoint for form submission
// POST endpoint for form submission
app.post('/register', (req, res) => {
    const user = req.body;

    // Remove confirmPassword field
    delete user.confirmPassword;

    // Insert data into MySQL
    db.query('INSERT INTO registrations SET ?', user, (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ error: 'Error submitting the form. Please try again.' });
            return;
        }
        console.log('Inserted ' + result.affectedRows + ' row(s).');
        res.json({ message: 'Form submitted successfully!' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

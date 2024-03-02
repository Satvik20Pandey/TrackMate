const express = require('express');
const mongoose = require('mongoose'); // Import mongoose module
const app = express();
const port = 4000; // Define the port number

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TrackMate')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const path = require('path');
const Post = require('./model/model'); // Import the Post model

const template_path = path.join(__dirname, '../template/views');
app.set('view engine', 'html');
app.set('views', template_path);

require('./db/db');

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

app.use(express.static('template/views')); // Replace 'public' with the directory where your static files are located

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Route to handle form submission
app.post('/TrackMate', (req, res) => {
    const { name, email, balance } = req.body;
    const newPost = new Post({
        name,
        email,
        balance
    });
    newPost.save()
        .then(() => {
            console.log('New data post saved successfully');
            res.redirect('/');
        })
        .catch((error) => {
            console.error('Error saving TrackMate:', error);
            res.status(500).send('Error saving TrackMate');
        });
});

app.get('/', (req, res) => {
    res.render('index2');
});

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});

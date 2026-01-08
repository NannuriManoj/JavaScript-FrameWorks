// Import required packages
const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS, images, JS) from the "public" folder
// Example: /index.css → public/index.css
app.use(express.static(path.join(__dirname, 'public')));

// Import data from JSON file (used for subreddit pages)
const redditData = require('./data.json');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set custom views directory
app.set('views', path.join(__dirname, 'views'));

/*
---------------------------------------
 ROUTE: Home Page
---------------------------------------
- Renders index.ejs
*/
app.get('/', (req, res) => {
    res.render('index.ejs');
});

/*
---------------------------------------
 ROUTE: /random
---------------------------------------
- Generates a random number between 1 and 10
- Passes it to random.ejs
*/
app.get('/random', (req, res) => {
    const rand = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand });
});

/*
---------------------------------------
 ROUTE: /r/:subreddit
---------------------------------------
- Uses route parameter to identify subreddit
- Fetches data from JSON file
- Spreads data and sends it to subreddit.ejs
- Example URL: /r/javascript
*/
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;

    // Get subreddit-specific data
    const data = redditData[subreddit];

    // Render subreddit page with dynamic data
    res.render('subreddit', { ...data });
});

/*
---------------------------------------
 START SERVER
---------------------------------------
- Server listens on port 3000
*/
app.listen(3000, () => {
    console.log("Listening on port 3000");
});

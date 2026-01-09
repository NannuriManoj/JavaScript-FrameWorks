// Import Express framework
const express = require('express');
const app = express();

/*
--------------------------------------------------
 MIDDLEWARE: Body Parsers
--------------------------------------------------

express.urlencoded({ extended: true })
- Parses form data sent using POST method
- Used when data is submitted via HTML forms
- Makes form data available in req.body

express.json()
- Parses JSON data sent in request body
- Used for APIs (Postman / frontend apps)

Without these middlewares, req.body will be undefined
*/

// Parses application/x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }));

// Parses application/json data
app.use(express.json());

/*
--------------------------------------------------
 ROUTE: GET /tacos
--------------------------------------------------
- Handles GET requests
- Used to FETCH or READ data
- Data (if any) comes through req.query
*/
app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
});

/*
--------------------------------------------------
 ROUTE: POST /tacos
--------------------------------------------------
- Handles POST requests
- Used to SEND or CREATE data
- Data comes through req.body
*/
app.post('/tacos', (req, res) => {
    // Destructure meat and qty from request body
    const { meat, qty } = req.body;

    // Send response back to client
    res.send(`OK! Here are your ${qty} ${meat} tacos`);
});

/*
--------------------------------------------------
 START SERVER
--------------------------------------------------
- Server listens on port 3000
*/
app.listen(3000, () => {
    console.log("Listening on port 3000");
});

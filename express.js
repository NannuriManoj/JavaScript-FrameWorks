// Import express package
const express = require("express")
// Create express application
const app = express()


/*
---------------------------------------
 ROUTE: /cats/:name
---------------------------------------
- This route handles GET requests
- :name is a route parameter
- Value is accessed using req.params
- Example URL: /cats/tom
*/
app.get('/cats/:name',(req, res) =>{
    // Deconstruting name from the parameters
    const {name} = req.params;
    // send response to the browser
    res.send(`<h1>cat name is ${name} <h1>`)
})


/*
---------------------------------------
 ROUTE: /dogs/:name
---------------------------------------
- Handles GET requests for dogs
- :name is dynamic
- Example URL: /dogs/bruno
*/
app.get('/dogs/:name',(req, res) =>{
    const {name} = req.params;
    res.send(`<h1>dog name is ${name}</h1>`)
})

/*
---------------------------------------
 ROUTE: /search
---------------------------------------
- Uses query parameters
- Example URL: /search?q=husky
- q is accessed using req.query
*/
app.get('/search',(req, res) =>{
    // deconstruting q from req.query
    const { q } = req.query;

    // logging into the console
    console.log(q);

    // sending response to the query value
    res.send(`<h1>dog name is ${q}</h1>`)
})


/*
---------------------------------------
 FALLBACK ROUTE (Catch-all)
---------------------------------------
- Matches ANY route not defined above
- Must always be at the BOTTOM
*/
app.get(/(.*)/,(req, res) =>{
    res.send("I don't know this request")
})

/*
---------------------------------------
 START SERVER
---------------------------------------
- Server listens on port 3000
*/
app.listen(3000, ()=>[
    console.log("Listening on port 3000")
])
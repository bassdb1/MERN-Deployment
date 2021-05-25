// tell the server to use Express, right out of our 'node_modules' - this contains our dependencies - what is needed for it to run
// Express is used for Web API
const express = require("express");
const app = express();

// I am creating a variable to tell the server to run in port 8000
const port = 8000;

// cors is so that this resource can be shared, access the API's
const cors = require("cors")

// We are going to tell the server to run, we are going to 

app.use(express.json()); //allows us to use json, we want to read 'json data'
app.use( express.urlencoded({ extended: true }));  // Needed to parse Json data
app.use(cors());   // this is used so our JavaScript FrontEnd can use our Back End 



//require our other modularized files (routes and config)
require("./server/config/petsdbconfig")  // tell the server where our config file is, where we can do CRUD

require("./server/routes/petroutes")(app)  // tell the server where our 'routes' are


//make it so that our server can listen for requests on port 8000
app.listen(port, ()=>console.log(`Listening on port number ${port} `) );
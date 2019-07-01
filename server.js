// in production we want server to be very small
// so we put routes somewhere else
// so we use router!! modularize the apps by breaking itup

// bring express
const express = require('express');

// variable for port process.env.port
const PORT = process.env.PORT || 3000;

// invoke it
const app = express();

// express urlencoded always needed 
// will always fire body parser
app.use(express.urlencoded({ extended: true }));
// json always needed
app.use(express.json());

const routes = require('./routes');
// first parameter is what routes is the middleware going to be used on
// 2nd paramenter is a function that takes:
//  req, res, next or ,
//  err, req, res, next
// put a * here so everyone can use it
// or "/" or "/whateveryouwant" and routes
app.use("/", routes);

//start the port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
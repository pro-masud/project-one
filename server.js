// create a server in nodejs and express js
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import createUser from "./router/users.js";
import createCustomer from "./router/customer.js";
import createStudent from "./router/students.js";
import createProductMiddleware from "./router/product.js";

// dotenv config here
dotenv.config();

// init express 
const app = express();


// init ejs
app.set("view engine", "ejs");

// init dotenv portnumber
const PORT = process.env.PORT || 6061;

// here all router
app.use(createUser); 
app.use(createCustomer); 
app.use(createStudent); 
app.use(createProductMiddleware); 

// create a server within express js
app.listen(PORT, () => {
    console.log(`Server is Running and Port Number is ${PORT}`.bgGreen.black);
});
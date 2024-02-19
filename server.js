// create a server in nodejs and express js
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import createUser from "./router/users.js";
import createCustomer from "./router/customer.js";
import createStudent from "./router/students.js";
import createProductMiddleware from "./router/product.js";
import createDeveloper from "./router/developer.js";
import createProducts from "./router/products.js";

// dotenv config here
dotenv.config();

// init express 
const app = express();

// json encodead
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// init ejs
app.set("view engine", "ejs");


// // file and folder public status
app.use(express.static("public"));

// init dotenv portnumber
const PORT = process.env.PORT || 6061;

// here all router
app.use(createUser); 
app.use(createCustomer); 
app.use(createStudent); 
app.use(createProductMiddleware); 
app.use(createDeveloper); 
app.use(createProducts); 

// create a server within express js
app.listen(PORT, () => {
    console.log(`Server is Running and Port Number is ${PORT}`.bgGreen.black);
});
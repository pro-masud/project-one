import express from "express";
import { createCustomer } from "../controllers/createCustomerController.js";
import { customerFileUpload } from "../utilities/createMulterRouter.js";



// init express js here
const router = express.Router();


// create backend router here
router.post("/customer", customerFileUpload, createCustomer);



// exports default router here
export default router;
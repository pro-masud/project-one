// include express js
import express from "express";
import { createCustomersController, createViewControlloer, singleProductView } from "../controllers/createCustomersController.js";


// init express router here
const router = express.Router();

// create customers router here
router.get("/create", createCustomersController);


// create customers router here
router.get("/single", singleProductView);

// create customers router here
router.get("/view", createViewControlloer);

// init export default router here
export default router;
import express from "express";
import { createProductMiddleware, getAllProduct, getDeleteProduct, getSingleProduct } from "../controllers/createProductMiddleware.js";
import { productFileUpload } from "../utilities/createMulterRouter.js";

// init express js 
const router = express.Router();

// create a get reires project router
router.get("/product", getAllProduct);

// create a get reires project router
router.get("/product/:slug", getSingleProduct);
router.delete("/product/:id", getDeleteProduct);

// create a post requires project router
router.post("/product", productFileUpload, createProductMiddleware);

// export default router here
export default router;
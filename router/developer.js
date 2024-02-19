import express from "express";
import { createDeveloperConttroller } from "../controllers/createDeveloperController.js";
import multer from "multer";


// init express router
const router = express.Router();

// create a multer file system management
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
         if(file.fieldname === "developerPhoto"){
            cb(null, "public/developers");
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +"_"+ Math.floor(Math.random() * 10000) + "_" + file.originalname);
    }
});

// init multer file managements
const developerFileUpload = multer({storage}).single("developerPhoto");

// create developer router
router.post("/developer", developerFileUpload, createDeveloperConttroller)


// express router export default router
export default router;
import express from "express";
import { createUserCon } from "../controllers/createUserController.js";
import { createUserMiddleware } from "../middleware/userCreateMiddleware.js";
import multer from "multer";

// init express js router here
const router = express.Router();

// create a multer file system management
const transport = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// create multer middleware 
const userFileUploading = multer({storage: transport});

// create user router here
router.post("/user", userFileUploading.single('file'), createUserCon);


// export default router here
export default router;
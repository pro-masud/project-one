import express from "express";
import { createUserCon } from "../controllers/createUserController.js";
import { createUserMiddleware } from "../middleware/userCreateMiddleware.js";
import { userFileUploading } from "../utilities/createMulterRouter.js";

// init express js router here
const router = express.Router();

// create user router here
router.post("/user", createUserCon);


// export default router here
export default router;
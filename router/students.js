import express from "express";
import { createStudent } from "../controllers/createStudentConttroler.js";
import { studentFileUpload } from "../utilities/createMulterRouter.js";

// init express router
const router = express.Router();

// create students router here
router.post("/student", studentFileUpload, createStudent);

// router default express router 
export default router;
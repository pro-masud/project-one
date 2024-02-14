import multer from "multer";

// create a multer file system management
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// create multer middleware 
export const userFileUploading = multer({storage}).single('file');
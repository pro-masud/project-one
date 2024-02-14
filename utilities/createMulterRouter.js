import multer from "multer";

// create a multer file system management
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname === "file"){
            cb(null, "public/userPhotos");
        }else if(file.fieldname === "prophoto"){
            cb(null, "public/CustomerPhone");
        }else if(file.fieldname === "stuphoto"){
            cb(null, "public/studentPhoto");
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +"_"+ Math.floor(Math.random() * 10000) + "_" + file.originalname);
    }
});

// create multer middleware 
export const userFileUploading = multer({storage}).single("file");
export const customerFileUpload = multer({storage}).single("prophoto");
export const studentFileUpload = multer({storage}).array("stuphoto", 5);

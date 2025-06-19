import fs from "fs";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "upload/";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        if (file.mimetype.startsWith("image/")) {
            cb(null, dir);
        } else {
            cb(new Error("Only image files are allowed"), false);
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});
export default upload;

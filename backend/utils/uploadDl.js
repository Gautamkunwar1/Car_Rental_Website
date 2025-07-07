import fs from "fs";
import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "dl/";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
         cb(null, dir);
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const uploadDl = multer({ storage });

export default uploadDl;

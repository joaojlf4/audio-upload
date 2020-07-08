import { Router } from 'express';
import path from 'path';
import UploadController from '../controllers/upload';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: "./src/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now().toString(16) + '-' + file.fieldname + '.mp3')
  }
});

const upload = multer({
  preservePath: true,
  storage
});

const router = Router();

router.post('/upload', upload.single('audio'), UploadController.store);
router.get('/', (req, res) => {
  res.sendFile("index.html", {
    root: path.resolve(__dirname, '..', 'views')
  })
})

export default router;
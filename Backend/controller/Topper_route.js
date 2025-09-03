import express from 'express';
import multer from 'multer';
import topper_info from '../model/Topper.js';

const Topperrouter = express.Router();

// Use memory storage to store files in memory as Buffer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET all toppers
Topperrouter.get('/topper-list', async (req, res) => {
  try {
    const toppers = await topper_info.find();
    res.json(toppers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST add topper with image upload
Topperrouter.post('/add-topper', upload.single('Image'), async (req, res) => {
  const { Class, name, stream, Percentage } = req.body;
  const Image64 = req.file ? req.file.buffer.toString('base64') : null;
  const mimeType = req.file ? req.file.mimetype : null; // Store MIME type
  try {
    const newTopper = new topper_info({
      Image: Image64,
      mimeType,
      Class,
      name,
      stream,
      Percentage,
    });

    await newTopper.save();
    res.status(201).json(newTopper);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default Topperrouter;

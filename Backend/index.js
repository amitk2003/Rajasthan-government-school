import express from 'express'
import dotenv from "dotenv";
import bodyParser from "body-parser"
import connectDB from "./db.js";
import teacher_route from "./controller/Teacher_role.js";
import Topperrouter from "./controller/Topper_route.js";
import cors from "cors"
import router from "./controller/User_credential.js";
// import multer from "multer";
// import path from "path"

const app=express();
dotenv.config();

const port=process.env.PORT;
// Set storage config for local storage
// const storage = multer.diskStorage({
//   destination: './uploads',
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // e.g., 1691200982.jpg
//   }
// });
// const upload = multer({ storage });
connectDB();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5174", // Change this to your frontend URL
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );
// to access backend url resources
app.get("/",(req,res)=>{
    return res.status(200).send("welcome to Gss_school peth");
    // console.log("welcome to book store app");
})
app.use("/api",router);
app.use("/api",teacher_route);
app.use("/api",Topperrouter);

// app.post('/upload', upload.single('image'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }
//   res.json({ filePath: `/uploads/${req.file.filename}` });
// });



app.listen(port,()=>{
    console.log(`server connected successfully at port ${port}`)
})
import express from "express";
// AS EXPRESS is library and router is functionality of express thats why we are calling as express.router
import User from "../model/User.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import authToken from "../AuthToken/AuthToken.js"


const router=express.Router();
router.post("/sign-up",async(req,res)=>{
try{
    const {Username,Email,password,address}=req.body;
     if (!Username || !Email || !password || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }
    if(Username.length<4){
        return res.status(400).json({message:"Username length should be greater than 4"});
    }
    // 
    const existingUser= await User.findOne({Username});
    // Username:Username ,Username  compares name from database whether user is already taken or not
    if(existingUser){ 
        return res.status(400).json({message:"Username already exists"});
    }
    const existingEmail= await User.findOne({Email});
    // Username:Username ,Username  compares name from database whether user is already taken or not
    if(existingEmail){
         return res.status(400).json({message:"Email already exists"});
        }
    // check password length
    if(password.length<=5){
        return res.status(400).json({message:"password length should be greater than 5"});
    }
    const hash_password=await bcrypt.hash(password,10);
    console.log(hash_password);
    // for new user
    const NewUser =new User({
        Username:Username,
        Email:Email,
        password:hash_password,
        address:address,
    });
    await NewUser.save();
    res.status(200).json({message:"Sign UP Successfully"});
   
    console.log(NewUser);

}catch(error){
    res.status(500).json({success:"false",error:"Error during sign up"});
    console.error("Internal server error",error);
}
});
router.post("/login", async (req, res) => {
  try {
    const { Username, password } = req.body;

    const ExistingUser = await User.findOne({ Username });

    if (!ExistingUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, ExistingUser.password);

    if (isMatch) {
      const authClaims = [
        { name: ExistingUser.Username },
        { role: ExistingUser.role },
      ];

      const token = jwt.sign({ authClaims }, "bookstore234", {
        expiresIn: "30d",
      });

      console.log(authClaims);
      return res
        .status(200)
        .json({ id: ExistingUser._id, role: ExistingUser.role, token: token });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Internal server error", error);
    return res
      .status(500)
      .json({ success: false, error: "Error during login" });
  }
});

// update address
// here also need to use authToken because we need to examaine only user whose data need to update
router.put("/update-Address",authToken,async(req,res)=>{
    try {
        const {id}=req.headers;
        const {address}=req.body;
        await User.findByIdAndUpdate(id,{address:address});
        return res.status(200).json({message:"Address updated successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"}); 
    }
})
router.put("/update-Email",authToken,async(req,res)=>{
    try{
        const {id}=req.headers;
        const {Email}=req.body;
        await User.findByIdAndUpdate(id,{Email:Email});
        return res.status(200).json({message:"email updated successfully"});

    }catch(error){
        res.status(500).json({message:"internal server error"})
    }
})


export default router;


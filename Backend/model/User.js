import mongoose from 'mongoose';
const user= new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    // // if you want to update password via email
    // resetPasswordToken: {
    //     type: String,
    // },
    // resetPasswordExpires: {
    //     type: Date,
    // },
    
    address:{
        type:String,
        required:true,
    }

},
{timestamps:true}
);
const User=mongoose.model('user_data',user,'user_data')
export default User;
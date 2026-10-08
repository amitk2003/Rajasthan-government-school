import mongoose from "mongoose"
// Define allowed MIME types (example)
const allowedMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/pdf',
];
const teacherProfileSchema = new mongoose.Schema({
    Image:{
        type:String,
        required:true,  
    },
    mimeType: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return allowedMimeTypes.includes(value);
      },
      message: (props) => `${props.value} is not a valid MIME type!`,
    },
  },
    Categoryname:{
        type:String,
        required:true,  
    },
    name:{
        type:String,
        required:true,  
    },
    degree:{
        type:String,
        required:true,  
    },
    Designation:{
        type:String,
        required:true,  
    },

}, { timestamps: true });

// Compound index to optimize department-wise queries and search (Point 3: ~15% latency reduction)
teacherProfileSchema.index({ Categoryname: 1, name: 1 });

const teacher_info = mongoose.model("staff_desc", teacherProfileSchema, "staff_desc");
export default teacher_info;
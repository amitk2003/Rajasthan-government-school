import mongoose from 'mongoose';

// Define allowed MIME types (example)
const allowedMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/pdf',
];

const Topper = new mongoose.Schema({
  Image: {
    type: String,
    required: true,
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
  Class: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  Percentage: {
    type: String,
    required: true,
  },
});

const topper_info = mongoose.model('topper_list', Topper);
export default topper_info;
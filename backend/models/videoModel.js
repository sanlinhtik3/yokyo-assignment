import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  video_link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Number,
    default: 0,
  },
});

const Video = mongoose.model('Video', videoSchema)

export default Video;
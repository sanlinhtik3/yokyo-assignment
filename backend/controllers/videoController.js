import expressAsyncHandler from "express-async-handler";
import Video from "../models/videoModel.js";

const getVideo = expressAsyncHandler(async (req, res) => {
  const {video_id} = req.params
  const video = await Video.findById(video_id);
  return res.json(video);
});

const getVideos = expressAsyncHandler(async(req, res) => {
    const video = await Video.find()
  return res.json(video);
});

const createVideos = expressAsyncHandler(async(req, res) => {
  const {name, video_link, description} = req.body;
  const video = await Video.create({name, video_link, description})
  // fuck place, i write {new: true} 
  // that give me a lot of fucking ploblem and that waste my time a lot. 
  return res.status(200).json(video)
});

const updateVideo = expressAsyncHandler(async (req, res) => {
  const { video_id } = req.params;
  const updatedVideo = await Video.findByIdAndUpdate(video_id, req.body, {new: true});
  return res.json(updatedVideo);
});

const deleteVideos = expressAsyncHandler(async (req, res) => {
    const { video_id } = req.params;
    const deletedVideo = await Video.findByIdAndDelete(video_id);
    return res.json(deletedVideo);
});


export { getVideos, createVideos, deleteVideos, updateVideo, getVideo };
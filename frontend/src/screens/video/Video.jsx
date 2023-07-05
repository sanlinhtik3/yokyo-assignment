import React from 'react'
import { useDeleteVideoMutation, useGetVideosQuery } from '../../slices/vidoApiSlice'
import {Link} from 'react-router-dom'
import VideoCard from './VideoCard';
import Loader from '../../components/Loader'

const Video = () => {
  const {data, isLoading} = useGetVideosQuery();

  // Loading
  if(isLoading) {
    return <>
      <Loader/>
    </>
  }

  return (
    <>
      <div>Video</div>

      <Link to={`/video/create`}>Create Video</Link>

      <div className=" grid grid-cols-4">
        {data.map((d) => (
          <div key={d._id}>
            <VideoCard d={d}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Video
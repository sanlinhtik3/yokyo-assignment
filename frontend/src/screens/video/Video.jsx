import React, { useEffect } from 'react'
import { useDeleteVideoMutation, useGetVideosQuery } from '../../slices/vidoApiSlice'
import {Link, useNavigate} from 'react-router-dom'
import VideoCard from './VideoCard';
import Loader from '../../components/Loader'
import { useGetManageUserQuery } from '../../slices/usersManageApiSlice';
import { useSelector } from 'react-redux';
import { PlusCircleIcon } from '@heroicons/react/20/solid';

const Video = () => {
  const {data, isLoading} = useGetVideosQuery();
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth);
  const { data: u, isLoading: l } = useGetManageUserQuery(userInfo._id);
  
  

  useEffect(() => {
    if (u?.access === 0) {
      return navigate(`/`);
    }
  }, [navigate, data]);

  // Loading
  if(isLoading) {
    return <>
      <Loader/>
    </>
  }

  return (
    <div className='max-w-screen-xl mx-auto p-4'>

      <h1 className=" text-3xl font-bold mb-3">Watch Videos</h1>

      <button
        onClick={() => navigate(`/video/create`)}
        className="flex items-center py-2.5 px-3 mr-2 mb-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-100 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
      >
        <PlusCircleIcon className=" w-4 mr-2" />
        Create Video
      </button>

      <div className=" grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((d) => (
          <div key={d._id}>
            <VideoCard d={d} u={u} l={l} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleVideoQuery } from '../../slices/vidoApiSlice'
import VideoCard from './VideoCard'
import { Link } from "react-router-dom";
import { useDeleteVideoMutation } from "../../slices/vidoApiSlice";
import { ChevronLeftIcon, PencilIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';
import { useGetManageUserQuery } from '../../slices/usersManageApiSlice';
import Loader from '../../components/Loader';
import { useGetSingleContactQuery } from '../../slices/contactApiSlice';

const DetailContact = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const {data, isLoading} = useGetSingleContactQuery(id)
  // const [deleteVideo, gg] = useDeleteVideoMutation();

  const { userInfo } = useSelector((state) => state.auth);
  const { data:d, isLoading:l } = useGetManageUserQuery(userInfo._id);


  useEffect(() => {
    if (d?.access === 0) {
      return navigate(`/`);
    }
  }, [navigate, data]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="px-3 lg:px-0 max-w-screen-xl mx-auto mt-10">
      <button
        type="button"
        onClick={() => navigate(`/contact`)}
        className=" flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <ChevronLeftIcon className=' w-5 inline-block' />
        Back
      </button>

      {data?.name}
      
    </div>
  );
}

export default DetailContact